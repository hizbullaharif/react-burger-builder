import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Contactdata, ContactdataRelations} from '../models';

export class ContactdataRepository extends DefaultCrudRepository<
  Contactdata,
  typeof Contactdata.prototype.id,
  ContactdataRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Contactdata, dataSource);
  }
}
