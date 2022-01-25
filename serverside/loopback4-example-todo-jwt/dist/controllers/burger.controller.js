"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BurgerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let BurgerController = class BurgerController {
    constructor(burgerRepository) {
        this.burgerRepository = burgerRepository;
    }
    async create(burger) {
        return this.burgerRepository.create(burger);
    }
    async count(where) {
        return this.burgerRepository.count(where);
    }
    async find(filter) {
        return this.burgerRepository.find(filter);
    }
    async updateAll(burger, where) {
        return this.burgerRepository.updateAll(burger, where);
    }
    async findById(id, filter) {
        const data = this.burgerRepository.find({
            where: {
                userid: id,
            },
        });
        return data;
    }
    async updateById(id, burger) {
        await this.burgerRepository.updateById(id, burger);
    }
    async replaceById(id, burger) {
        await this.burgerRepository.replaceById(id, burger);
    }
    async deleteById(id) {
        await this.burgerRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/burgers'),
    (0, rest_1.response)(200, {
        description: 'Burger model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Burger) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Burger, {
                    title: 'NewBurger',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], BurgerController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/burgers/count'),
    (0, rest_1.response)(200, {
        description: 'Burger model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Burger)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], BurgerController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/burgers'),
    (0, rest_1.response)(200, {
        description: 'Array of Burger model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Burger, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Burger)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], BurgerController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/burgers'),
    (0, rest_1.response)(200, {
        description: 'Burger PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Burger, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Burger)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Burger, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], BurgerController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/burgers/{id}'),
    (0, rest_1.response)(200, {
        description: 'Burger model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Burger, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Burger, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], BurgerController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/burgers/{id}'),
    (0, rest_1.response)(204, {
        description: 'Burger PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Burger, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Burger]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], BurgerController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/burgers/{id}'),
    (0, rest_1.response)(204, {
        description: 'Burger PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Burger]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], BurgerController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/burgers/{id}'),
    (0, rest_1.response)(204, {
        description: 'Burger DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], BurgerController.prototype, "deleteById", null);
BurgerController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.BurgerRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.BurgerRepository])
], BurgerController);
exports.BurgerController = BurgerController;
//# sourceMappingURL=burger.controller.js.map