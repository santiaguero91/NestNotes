import { DataSource, MongoRepository } from 'typeorm';
import { Student } from './student.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentRepository extends MongoRepository<Student> {
  constructor(private dataSource: DataSource) {
    super(Student, dataSource.createEntityManager());
  }
}
