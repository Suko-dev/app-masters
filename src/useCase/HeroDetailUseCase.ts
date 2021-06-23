import { Hero } from "../entities/Hero";
import { AppError } from "../error/AppError";
import { HeroRepository } from "../repositories/HeroRepository";

export class HeroDetailUseCase {
    execute(slug: string): Hero {
        const heroRepository = HeroRepository.getInstance();
        const heroes = heroRepository.getDetail(slug);
        if (!heroes) {
            throw new AppError("not found", 404);
        }
        return heroes;
    }
}
