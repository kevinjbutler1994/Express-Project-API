import {Router} from 'express';
import planetsRoutes from './planets.js'
import charactersRoutes from './characters.js'

const router = Router()

router.get('/', (rec, res) => res.send ('this is the star wars API route!'));

router.use('/planets', planetsRoutes);
router.use('/characters', charactersRoutes)

export default router;