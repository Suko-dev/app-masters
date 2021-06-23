import { Router } from "express";

import { HeroDetailController } from "../controller/HeroDetailController";
import { SearchHeroController } from "../controller/SearchHeroController";

export const heroRoutes = Router();
const searchHeroController = new SearchHeroController();
const heroDetailController = new HeroDetailController();

heroRoutes.get("/search", searchHeroController.handle);
heroRoutes.get("/hero/:slug", heroDetailController.handle);
