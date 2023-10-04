import { Schema, Types, model, Model } from "mongoose";
import { Reactivo } from "../interfaces/reactivo.interface";
import { OpcionMultipleReactivo } from '../interfaces/opcion.interface';

const opcionMultipleSchema = new Schema<OpcionMultipleReactivo>(
    {
        textoOpcion: {
            type: String
        },
        esCorrecta: {
            type: Boolean
        }
    },
    {
        
    }
)

const reactivoSchema = new Schema<Reactivo>(
    {
        textoPregunta: {
            type: String
        },
        textoRespuesta: {
            type: String
        },
        opciones: [opcionMultipleSchema],
        estadoAprobacion: {
            type: String,
            enum: ['Pendiente', 'Aprobado', 'Rechazado']
        },
        comentarios: {
            type: String
        },
        fechaRevision: {
            type: String
        },
        uidUser: {
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const reactivoModel = model("data_reactivo", reactivoSchema)

export default reactivoModel