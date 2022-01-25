import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Burger } from '../models';
import { BurgerRepository } from '../repositories';
export declare class BurgerController {
    burgerRepository: BurgerRepository;
    constructor(burgerRepository: BurgerRepository);
    create(burger: Omit<Burger, 'id'>): Promise<Burger>;
    count(where?: Where<Burger>): Promise<Count>;
    find(filter?: Filter<Burger>): Promise<Burger[]>;
    updateAll(burger: Burger, where?: Where<Burger>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Burger>): Promise<any>;
    updateById(id: string, burger: Burger): Promise<void>;
    replaceById(id: string, burger: Burger): Promise<void>;
    deleteById(id: string): Promise<void>;
}
