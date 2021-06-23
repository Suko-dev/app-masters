import { Hero } from "../entities/Hero";
import { AppError } from "../error/AppError";
import { HeroRepository } from "../repositories/HeroRepository";

export class SearchHeroUseCase {
    execute(q: string): Hero[] {
        if (!q || q.length < 3) {
            throw new AppError(
                "parâmetro inválido. Insira um parâmetro de busca 'q' com 3 ou mais caracteres"
            );
        }
        const heroRepository = HeroRepository.getInstance();
        const heroes = heroRepository.searchHero(q);
        return heroes;
    }
}
