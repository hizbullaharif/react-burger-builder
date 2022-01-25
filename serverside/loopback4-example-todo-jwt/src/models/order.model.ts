import {Entity, model, property} from '@loopback/repository';

@model()
export class Order extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  userid: string;
  @property({
    type: 'string',
    required: true,
  })
  totalPrice: string;

  @property({
    type: 'number',
  })
  bacon?: number;

  @property({
    type: 'number',
  })
  cheese?: number;

  @property({
    type: 'number',
  })
  lettuce?: number;

  @property({
    type: 'number',
  })
  meat?: number;

  constructor(data?: Partial<Order>) {
    super(data);
  }
}

export interface OrderRelations {
  // describe navigational properties here
}

export type OrderWithRelations = Order & OrderRelations;
