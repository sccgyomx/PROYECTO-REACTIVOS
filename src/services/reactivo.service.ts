import { Reactivo } from "../interfaces/reactivo.interface"
import reactivoModel from "../models/reactivo.model"

const insertReactivo = async (reactivo: Reactivo) => {
    return await reactivoModel.create(reactivo)
}

const getAllReactivo = async () => {
    return await reactivoModel.find()
}

export { insertReactivo, getAllReactivo }