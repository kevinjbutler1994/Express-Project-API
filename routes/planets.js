import {Router} from 'express';
import * as controllers from "../controllers/planets.js";

const router = Router();

router.get('/', controllers.getPlanets);
router.get('/:id', controllers.getPlanet)
router.post('/', controllers.createPlanet);
router.put('/:id', controllers.updatePlanet);
router.delete('/:id', controllers.deletePlanet);

export default router;