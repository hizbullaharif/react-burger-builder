import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Contactdata, ContactdataRelations } from '../models';
export declare class ContactdataRepository extends DefaultCrudRepository<Contactdata, typeof Contactdata.prototype.id, ContactdataRelations> {
    constructor(dataSource: DbDataSource);
}
