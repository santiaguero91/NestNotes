import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class UpdateStudentInput {
  @MinLength(1)
  @Field()
  id: string;
  @MinLength(1)
  @Field()
  firstName: string;
  @MinLength(1)
  @Field()
  lastName: string;
}
