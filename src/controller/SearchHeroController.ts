import { Request, Response } from "express";

import { HeroRepository } from "../repositories/HeroRepository";
import { SearchHeroUseCase } from "../useCase/SearchHeroUseCase";

export class SearchHeroController {
    async handle(request: Request, response: Response): Promise<Response> {
        const heroRepository = HeroRepository.getInstance();
        await heroRepository.Populate();
        const { q } = request.query;
        const searchHeroUseCase = new SearchHeroUseCase();
        const heroes = searchHeroUseCase.execute(q as string);
        if (heroes.length === 0) {
            return response.status(204).send();
        }
        return response.status(200).json(heroes);
    }
}
