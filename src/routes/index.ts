import { Router } from "express";
import healthRoutes from "./healthRoutes"
import usuarioRoutes from "./usuarioRoutes";

const apiRoutes = Router()

apiRoutes.use('/', healthRoutes)
apiRoutes.use('/usuario', usuarioRoutes)
export default apiRoutes