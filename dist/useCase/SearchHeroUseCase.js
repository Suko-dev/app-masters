"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchHeroUseCase = void 0;
var AppError_1 = require("../error/AppError");
var HeroRepository_1 = require("../repositories/HeroRepository");
var SearchHeroUseCase = /** @class */ (function () {
    function SearchHeroUseCase() {
    }
    SearchHeroUseCase.prototype.execute = function (q) {
        if (!q || q.length < 3) {
            throw new AppError_1.AppError("parâmetro inválido. Insira um parâmetro de busca 'q' com 3 ou mais caracteres");
        }
        var heroRepository = HeroRepository_1.HeroRepository.getInstance();
        var heroes = heroRepository.searchHero(q);
        return heroes;
    };
    return SearchHeroUseCase;
}());
exports.SearchHeroUseCase = SearchHeroUseCase;
