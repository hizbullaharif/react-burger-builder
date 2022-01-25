import { Entity } from '@loopback/repository';
export declare class Contactdata extends Entity {
    id?: string;
    name?: string;
    userid?: string;
    street?: string;
    zipcode?: string;
    country?: string;
    email?: string;
    status?: string;
    [prop: string]: any;
    constructor(data?: Partial<Contactdata>);
}
export interface ContactdataRelations {
}
export declare type ContactdataWithRelations = Contactdata & ContactdataRelations;
