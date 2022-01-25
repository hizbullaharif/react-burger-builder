"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactdataController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ContactdataController = class ContactdataController {
    constructor(contactdataRepository) {
        this.contactdataRepository = contactdataRepository;
    }
    async create(contactdata) {
        return this.contactdataRepository.create(contactdata);
    }
    async count(where) {
        return this.contactdataRepository.count(where);
    }
    async find(filter) {
        return this.contactdataRepository.find(filter);
    }
    async updateAll(contactdata, where) {
        return this.contactdataRepository.updateAll(contactdata, where);
    }
    async findById(id, filter) {
        return this.contactdataRepository.findById(id, filter);
    }
    async updateById(id, contactdata) {
        await this.contactdataRepository.updateById(id, contactdata);
    }
    async replaceById(id, contactdata) {
        await this.contactdataRepository.replaceById(id, contactdata);
    }
    async deleteById(id) {
        await this.contactdataRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/contactdata'),
    (0, rest_1.response)(200, {
        description: 'Contactdata model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Contactdata) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Contactdata, {
                    title: 'NewContactdata',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ContactdataController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/contactdata/count'),
    (0, rest_1.response)(200, {
        description: 'Contactdata model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Contactdata)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ContactdataController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/contactdata'),
    (0, rest_1.response)(200, {
        description: 'Array of Contactdata model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Contactdata, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Contactdata)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ContactdataController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/contactdata'),
    (0, rest_1.response)(200, {
        description: 'Contactdata PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Contactdata, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Contactdata)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Contactdata, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ContactdataController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/contactdata/{id}'),
    (0, rest_1.response)(200, {
        description: 'Contactdata model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Contactdata, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Contactdata, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ContactdataController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/contactdata/{id}'),
    (0, rest_1.response)(204, {
        description: 'Contactdata PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Contactdata, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Contactdata]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ContactdataController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/contactdata/{id}'),
    (0, rest_1.response)(204, {
        description: 'Contactdata PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Contactdata]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ContactdataController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/contactdata/{id}'),
    (0, rest_1.response)(204, {
        description: 'Contactdata DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ContactdataController.prototype, "deleteById", null);
ContactdataController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.ContactdataRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.ContactdataRepository])
], ContactdataController);
exports.ContactdataController = ContactdataController;
//# sourceMappingURL=contactdata.controller.js.map