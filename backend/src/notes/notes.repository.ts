import { DataSource, MongoRepository } from 'typeorm';
import { Note } from './note.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NoteRepository extends MongoRepository<Note> {
  constructor(private dataSource: DataSource) {
    super(Note, dataSource.createEntityManager());
  }
}
