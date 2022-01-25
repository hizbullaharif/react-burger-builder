import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Contactdata extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  userid?: string;

  @property({
    type: 'string',
  })
  street?: string;

  @property({
    type: 'string',
  })
  zipcode?: string;

  @property({
    type: 'string',
  })
  country?: string;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'string',
  })
  status?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Contactdata>) {
    super(data);
  }
}

export interface ContactdataRelations {
  // describe navigational properties here
}

export type ContactdataWithRelations = Contactdata & ContactdataRelations;
