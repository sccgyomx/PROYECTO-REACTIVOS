import { OpcionMultipleReactivo } from './opcion.interface';
export interface Reactivo {
    textoPregunta: String,
    textoRespuesta: String,
    opciones: [OpcionMultipleReactivo]
    estadoAprobacion: 'Pendiente' | 'Aprobado' | 'Rechazado',
    comentarios: String,
    fechaRevision: String,
    uidUser: String
}