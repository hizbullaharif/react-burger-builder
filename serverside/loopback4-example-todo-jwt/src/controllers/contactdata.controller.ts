import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Contactdata} from '../models';
import {ContactdataRepository} from '../repositories';

export class ContactdataController {
  constructor(
    @repository(ContactdataRepository)
    public contactdataRepository : ContactdataRepository,
  ) {}

  @post('/contactdata')
  @response(200, {
    description: 'Contactdata model instance',
    content: {'application/json': {schema: getModelSchemaRef(Contactdata)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Contactdata, {
            title: 'NewContactdata',
            exclude: ['id'],
          }),
        },
      },
    })
    contactdata: Omit<Contactdata, 'id'>,
  ): Promise<Contactdata> {
    return this.contactdataRepository.create(contactdata);
  }

  @get('/contactdata/count')
  @response(200, {
    description: 'Contactdata model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Contactdata) where?: Where<Contactdata>,
  ): Promise<Count> {
    return this.contactdataRepository.count(where);
  }

  @get('/contactdata')
  @response(200, {
    description: 'Array of Contactdata model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Contactdata, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Contactdata) filter?: Filter<Contactdata>,
  ): Promise<Contactdata[]> {
    return this.contactdataRepository.find(filter);
  }

  @patch('/contactdata')
  @response(200, {
    description: 'Contactdata PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Contactdata, {partial: true}),
        },
      },
    })
    contactdata: Contactdata,
    @param.where(Contactdata) where?: Where<Contactdata>,
  ): Promise<Count> {
    return this.contactdataRepository.updateAll(contactdata, where);
  }

  @get('/contactdata/{id}')
  @response(200, {
    description: 'Contactdata model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Contactdata, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Contactdata, {exclude: 'where'}) filter?: FilterExcludingWhere<Contactdata>
  ): Promise<Contactdata> {
    return this.contactdataRepository.findById(id, filter);
  }

  @patch('/contactdata/{id}')
  @response(204, {
    description: 'Contactdata PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Contactdata, {partial: true}),
        },
      },
    })
    contactdata: Contactdata,
  ): Promise<void> {
    await this.contactdataRepository.updateById(id, contactdata);
  }

  @put('/contactdata/{id}')
  @response(204, {
    description: 'Contactdata PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() contactdata: Contactdata,
  ): Promise<void> {
    await this.contactdataRepository.replaceById(id, contactdata);
  }

  @del('/contactdata/{id}')
  @response(204, {
    description: 'Contactdata DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.contactdataRepository.deleteById(id);
  }
}
