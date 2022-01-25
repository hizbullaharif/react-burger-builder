import { Entity } from '@loopback/repository';
export declare class Order extends Entity {
    id?: string;
    userid: string;
    totalPrice: string;
    bacon?: number;
    cheese?: number;
    lettuce?: number;
    meat?: number;
    constructor(data?: Partial<Order>);
}
export interface OrderRelations {
}
export declare type OrderWithRelations = Order & OrderRelations;
