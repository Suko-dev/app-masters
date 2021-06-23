"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (item, param) {
    return Object.keys(item).some(function (key) {
        if (item[key] instanceof Array) {
            return item[key].some(function (value) { return value === param; });
        }
        if (!item[key])
            return false;
        return item[key].toLowerCase().includes(param.toLowerCase());
    });
});
