import { Router } from "express";
import healthRoutes from "./healthRoutes"
import taskRoutes from "./taskRoutes";
import usuarioRoutes from "./usuarioRoutes";

const apiRoutes = Router()

apiRoutes.use('/', healthRoutes)
apiRoutes.use('/usuario', usuarioRoutes)
apiRoutes.use('/task', taskRoutes)
export default apiRoutes