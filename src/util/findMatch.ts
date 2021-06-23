import { Hero } from "../entities/Hero";

export default (item: Partial<Hero>, param: string): boolean => {
    return Object.keys(item).some((key) => {
        if (item[key] instanceof Array) {
            return item[key].some((value: string) => value === param);
        }
        if (!item[key]) return false;
        return item[key].toLowerCase().includes(param.toLowerCase());
    });
};
