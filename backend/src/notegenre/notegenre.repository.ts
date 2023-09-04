import { DataSource, MongoRepository } from 'typeorm';
import { NoteGenre } from './notegenre.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NoteGenreRepository extends MongoRepository<NoteGenre> {
  constructor(private dataSource: DataSource) {
    super(NoteGenre, dataSource.createEntityManager());
  }
}
