import { Injectable } from '@nestjs/common';
import { Student } from './student.entity';
import { MongoRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';
import { v4 as uuid } from 'uuid';
import { StudentRepository } from './students.repository';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: StudentRepository,
  ) {}

  async getStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }
  async getStudent(id: string): Promise<Student> {
    return this.studentRepository.findOneBy({ id });
  }
  async deleteStudent(id: string) {
    return this.studentRepository.findOneAndDelete({ id });
  }

  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    const { firstName, lastName } = createStudentInput;
    const student = this.studentRepository.create({
      id: uuid(),
      firstName,
      lastName,
    });
    return this.studentRepository.save(student);
  }

  async updateStudent(
    updateStudentInput: UpdateStudentInput,
  ): Promise<Student> {
    const { id, firstName, lastName } = updateStudentInput;
    const student = await this.studentRepository.findOneBy({ id });
    if (!student) {
      throw new Error('Student not found');
    }
    student.firstName = firstName;
    student.lastName = lastName;
    return this.studentRepository.save(student);
  }

  async getManyStudents(studentIds: string[]): Promise<Student[]> {
    return this.studentRepository.find({
      where: {
        id: {
          $in: studentIds,
        },
      },
    });
  }
}
