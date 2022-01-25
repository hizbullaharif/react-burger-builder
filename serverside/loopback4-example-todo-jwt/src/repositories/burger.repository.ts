import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Burger, BurgerRelations} from '../models';

export class BurgerRepository extends DefaultCrudRepository<
  Burger,
  typeof Burger.prototype.id,
  BurgerRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Burger, dataSource);
  }
}
