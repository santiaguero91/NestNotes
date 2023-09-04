import { Field, InputType,ID } from '@nestjs/graphql';
import { MinLength } from 'class-validator';
import { TaskStatus } from '../note.entity';

@InputType()
export class UpdateNoteInput {
  @MinLength(1)
  @Field()
  id: string;
  @MinLength(1)
  @Field()
  name: string;
  @MinLength(1)
  @Field()
  description: string;
  @Field()
  category: TaskStatus;
  @Field(() => [ID],)
  genres: string[];
}
