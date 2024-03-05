import { Router } from "express";
import planetsRoutes from "./houses.js"
import charactersRoutes from "./characters.js"


const router = Router ()

router.get("/", (rec, res) => res.send ('This is the api root!'));

router.use("/planets", planetsRoutes)
router.use("/characters", charactersRoutes)



export default router 


