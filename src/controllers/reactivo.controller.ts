import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getAllReactivo, insertReactivo } from "../services/reactivo.service";
import { preguntarAOpenAI } from "../services/openai.service";

const getReactivo = ({ body }: Request, response: Response) => {
    try {

    } catch (error) {
        handleHttp(response, error)
    }
}
const preguntar = async ({ body }: Request, response: Response) => {

    try {
        response.send(await preguntarAOpenAI(body))
    } catch (error) {
        handleHttp(response, error)
    }
}
const getReactivos = async ({ body }: Request, response: Response) => {
    try {
        response.send(await getAllReactivo())
    } catch (error) {
        handleHttp(response, error)
    }
}
const updateReactivo = ({ body }: Request, response: Response) => {
    try {

    } catch (error) {
        handleHttp(response, error)
    }
}
const postReactivo = async ({ body }: Request, response: Response) => {
    try {
        response.send(await insertReactivo(body))
    } catch (error) {
        handleHttp(response, error)
    }
}
const deleteReactivo = ({ body }: Request, response: Response) => {
    try {

    } catch (error) {
        handleHttp(response, error)
    }
}

export {
    getReactivo,
    getReactivos,
    updateReactivo,
    postReactivo,
    deleteReactivo,
    preguntar
}


