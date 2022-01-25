import {Entity, model, property} from '@loopback/repository';

@model()
export class Burger extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: Number,
    required: true,
  })
  lettuce: string;

  @property({
    type: Number,
    required: true,
  })
  bacon: string;

  @property({
    type: Number,
    required: true,
  })
  cheese: string;

  @property({
    type: Number,
  })
  meat?: string;

  @property({
    type: 'string',
    required: true,
  })
  price: string;

  @property({
    type: 'string',
    required: true,
  })
  userid: string;

  constructor(data?: Partial<Burger>) {
    super(data);
  }
}

export interface BurgerRelations {
  // describe navigational properties here
}

export type BurgerWithRelations = Burger & BurgerRelations;
