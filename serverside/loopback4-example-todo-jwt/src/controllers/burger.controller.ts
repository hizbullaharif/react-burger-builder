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
import {Burger} from '../models';
import {BurgerRepository} from '../repositories';

export class BurgerController {
  constructor(
    @repository(BurgerRepository)
    public burgerRepository: BurgerRepository,
  ) {}

  @post('/burgers')
  @response(200, {
    description: 'Burger model instance',
    content: {'application/json': {schema: getModelSchemaRef(Burger)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Burger, {
            title: 'NewBurger',
            exclude: ['id'],
          }),
        },
      },
    })
    burger: Omit<Burger, 'id'>,
  ): Promise<Burger> {
    return this.burgerRepository.create(burger);
  }

  @get('/burgers/count')
  @response(200, {
    description: 'Burger model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(@param.where(Burger) where?: Where<Burger>): Promise<Count> {
    return this.burgerRepository.count(where);
  }

  @get('/burgers')
  @response(200, {
    description: 'Array of Burger model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Burger, {includeRelations: true}),
        },
      },
    },
  })
  async find(@param.filter(Burger) filter?: Filter<Burger>): Promise<Burger[]> {
    return this.burgerRepository.find(filter);
  }

  @patch('/burgers')
  @response(200, {
    description: 'Burger PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Burger, {partial: true}),
        },
      },
    })
    burger: Burger,
    @param.where(Burger) where?: Where<Burger>,
  ): Promise<Count> {
    return this.burgerRepository.updateAll(burger, where);
  }

  @get('/burgers/{id}')
  @response(200, {
    description: 'Burger model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Burger, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Burger, {exclude: 'where'})
    filter?: FilterExcludingWhere<Burger>,
  ): Promise<any> {
    const data = this.burgerRepository.find({
      where: {
        userid: id,
      },
    });
    return data;
  }

  @patch('/burgers/{id}')
  @response(204, {
    description: 'Burger PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Burger, {partial: true}),
        },
      },
    })
    burger: Burger,
  ): Promise<void> {
    await this.burgerRepository.updateById(id, burger);
  }

  @put('/burgers/{id}')
  @response(204, {
    description: 'Burger PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() burger: Burger,
  ): Promise<void> {
    await this.burgerRepository.replaceById(id, burger);
  }

  @del('/burgers/{id}')
  @response(204, {
    description: 'Burger DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.burgerRepository.deleteById(id);
  }
}
