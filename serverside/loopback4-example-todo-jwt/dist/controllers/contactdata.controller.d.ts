import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Contactdata } from '../models';
import { ContactdataRepository } from '../repositories';
export declare class ContactdataController {
    contactdataRepository: ContactdataRepository;
    constructor(contactdataRepository: ContactdataRepository);
    create(contactdata: Omit<Contactdata, 'id'>): Promise<Contactdata>;
    count(where?: Where<Contactdata>): Promise<Count>;
    find(filter?: Filter<Contactdata>): Promise<Contactdata[]>;
    updateAll(contactdata: Contactdata, where?: Where<Contactdata>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Contactdata>): Promise<Contactdata>;
    updateById(id: string, contactdata: Contactdata): Promise<void>;
    replaceById(id: string, contactdata: Contactdata): Promise<void>;
    deleteById(id: string): Promise<void>;
}
