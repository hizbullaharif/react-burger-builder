import { Entity } from '@loopback/repository';
export declare class Burger extends Entity {
    id?: string;
    lettuce: string;
    bacon: string;
    cheese: string;
    meat?: string;
    price: string;
    userid: string;
    constructor(data?: Partial<Burger>);
}
export interface BurgerRelations {
}
export declare type BurgerWithRelations = Burger & BurgerRelations;
