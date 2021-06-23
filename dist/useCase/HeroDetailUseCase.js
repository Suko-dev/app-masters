"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroDetailUseCase = void 0;
var AppError_1 = require("../error/AppError");
var HeroRepository_1 = require("../repositories/HeroRepository");
var HeroDetailUseCase = /** @class */ (function () {
    function HeroDetailUseCase() {
    }
    HeroDetailUseCase.prototype.execute = function (slug) {
        var heroRepository = HeroRepository_1.HeroRepository.getInstance();
        var heroes = heroRepository.getDetail(slug);
        if (!heroes) {
            throw new AppError_1.AppError("not found", 404);
        }
        return heroes;
    };
    return HeroDetailUseCase;
}());
exports.HeroDetailUseCase = HeroDetailUseCase;
