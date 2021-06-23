import { Request, Response } from "express";

import { HeroRepository } from "../repositories/HeroRepository";
import { HeroDetailUseCase } from "../useCase/HeroDetailUseCase";

export class HeroDetailController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { slug } = request.params;
        const heroRepository = HeroRepository.getInstance();
        await heroRepository.Populate();
        const heroDetailUseCase = new HeroDetailUseCase();
        const hero = heroDetailUseCase.execute(slug);
        return response.json(hero);
    }
}
