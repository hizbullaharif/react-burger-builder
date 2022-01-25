"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Burger = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Burger = class Burger extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Burger.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: Number,
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Burger.prototype, "lettuce", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: Number,
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Burger.prototype, "bacon", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: Number,
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Burger.prototype, "cheese", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: Number,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Burger.prototype, "meat", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Burger.prototype, "price", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Burger.prototype, "userid", void 0);
Burger = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Burger);
exports.Burger = Burger;
//# sourceMappingURL=burger.model.js.map