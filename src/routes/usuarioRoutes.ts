import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController";

const usuarioRoutes = Router()
const controller = new UsuarioController()

usuarioRoutes.get('/', controller.getAll)
usuarioRoutes.get('/:id', controller.getById)
usuarioRoutes.post('/', controller.create)
usuarioRoutes.put('/:id', controller.update)
usuarioRoutes.delete('/:id', controller.delete)

export default usuarioRoutes