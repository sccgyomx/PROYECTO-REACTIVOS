import { Request, Response, Router } from "express";
import { deleteReactivo, getReactivo, getReactivos, postReactivo, preguntar, updateReactivo } from "../controllers/reactivo.controller";

const router = Router();

router.get('/', getReactivos);
router.post('/preguntar', preguntar);
router.get('/especifico', getReactivo);
router.post('/guardar', postReactivo);
router.delete('/eliminar', deleteReactivo);
router.put('/actualizar', updateReactivo);

export { router }