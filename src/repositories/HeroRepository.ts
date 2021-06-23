import axios from "axios";

import { Hero } from "../entities/Hero";
import findMatch from "../util/findMatch";

export class HeroRepository {
    private heroes: Hero[];
    private static INSTANCE: HeroRepository;

    private constructor() {
        this.heroes = [];
    }

    public static getInstance(): HeroRepository {
        if (!HeroRepository.INSTANCE) {
            HeroRepository.INSTANCE = new HeroRepository();
        }
        return HeroRepository.INSTANCE;
    }

    searchHero(q: string): Hero[] {
        return this.heroes.filter((item) => {
            return (
                item.name.toLowerCase().includes(q.toLowerCase()) ||
                findMatch(item.biography, q) ||
                findMatch(item.appearance, q) ||
                findMatch(item.work, q)
            );
        });
    }

    getDetail(slug: string): Hero {
        return this.heroes.find((item) => item.slug === slug);
    }

    async Populate(): Promise<void> {
        if (this.heroes.length === 0) {
            const heroes = await axios.get(
                "https://akabab.github.io/superhero-api/api/all.json"
            );
            this.heroes = heroes.data;
        }
    }
}
