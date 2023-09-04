import { InputType, Int, Field } from '@nestjs/graphql';
import { MinLength } from 'class-validator';
@InputType()
export class CreateNoteGenreInput {
  @MinLength(1)
  @Field()
  name: string;
}