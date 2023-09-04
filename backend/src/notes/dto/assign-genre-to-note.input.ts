import { Field, ID, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class AssignGenreToNoteInput {
  @IsUUID()
  @Field((type) => ID)
  noteId: string;

  @IsUUID('4', { each: true })
  @Field((type) => [ID])
  genreIds: string[];
}