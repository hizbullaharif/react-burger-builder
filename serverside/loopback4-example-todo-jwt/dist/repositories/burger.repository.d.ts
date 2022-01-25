import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Burger, BurgerRelations } from '../models';
export declare class BurgerRepository extends DefaultCrudRepository<Burger, typeof Burger.prototype.id, BurgerRelations> {
    constructor(dataSource: DbDataSource);
}
