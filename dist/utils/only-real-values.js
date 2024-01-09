"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onlyRealValues = void 0;
const onlyRealValues = (values) => {
    return values.filter((valueItem) => valueItem !== undefined ||
        valueItem !== 'undefined' ||
        valueItem !== null);
};
exports.onlyRealValues = onlyRealValues;
//# sourceMappingURL=only-real-values.js.map