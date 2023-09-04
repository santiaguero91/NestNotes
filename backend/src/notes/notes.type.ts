import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { TaskStatus } from './note.entity';
import { NotesGenreType } from 'src/notegenre/notegenre.type';

@ObjectType('Note')
export class NotesType {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  category: TaskStatus;
  @Field((type) => [NotesGenreType])
  genres: string[];
}
