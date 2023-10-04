import OpenAI from "openai"
import getClientOptions from "../config/openai.config";
import { RequestOpenAI } from "../interfaces/requestOpenAI.interface";
import { Reactivo } from "../interfaces/reactivo.interface";
import { insertReactivo } from "./reactivo.service";

const openai = new OpenAI(getClientOptions);
const preguntarAOpenAI = async (body: RequestOpenAI) => {

    const respuesta = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "user", content: body.message }
        ],
        stream: true
    })


    // Variables para recopilar el flujo de fragmentos
    const collectedChunks = [];
    const collectedMessages = [];

    // Iterar a través del flujo de eventos
    for await (const chunk of respuesta) {// Calcular el retraso de tiempo del fragmento
        collectedChunks.push(chunk); // Guardar la respuesta del evento

        const chunkMessage = chunk.choices[0].delta.content; // Extraer el mensaje
        collectedMessages.push(chunkMessage); // Guardar el mensaje
    }

    // Imprimir el tiempo de retraso y el texto recibido
    var fullReplyContent = collectedMessages.map((m) => m).join('');

    if (fullReplyContent.includes("```json") || fullReplyContent.startsWith("{") || fullReplyContent.includes("{")) {
        const inicioJSON = fullReplyContent.indexOf("{");

        const finJSON = fullReplyContent.lastIndexOf("}") + 1;
        fullReplyContent = fullReplyContent.substring(inicioJSON, finJSON);

        var reactivo: Reactivo = JSON.parse(fullReplyContent);
        reactivo.estadoAprobacion = "Pendiente"
        reactivo.fechaRevision = formatearFecha(new Date())
        reactivo.uidUser = ""
        reactivo.textoRespuesta = ""
        reactivo.comentarios = "Aun no sea revisado."

        return await insertReactivo(reactivo)
    }
    return await { "message": "Algo fallo", "data": fullReplyContent };
}

function formatearFecha(fecha: Date): string {
    const dia = fecha.getDate().toString().padStart(2, '0'); // Obtener el día y asegurarse de que tenga dos dígitos
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Obtener el mes (se suma 1 ya que los meses comienzan en 0) y asegurarse de que tenga dos dígitos
    const anio = fecha.getFullYear().toString(); // Obtener el año en formato de cuatro dígitos

    return `${dia}/${mes}/${anio}`;
}

export { preguntarAOpenAI }