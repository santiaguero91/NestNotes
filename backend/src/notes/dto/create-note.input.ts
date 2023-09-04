import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { IsUUID, MinLength } from 'class-validator';
import { TaskStatus } from '../note.entity';
@InputType()
export class CreateNoteInput {
  @MinLength(1)
  @Field()
  name: string;

  @MinLength(1)
  @Field()
  description: string;

  @Field()
  category: TaskStatus;

  @IsUUID('4', { each: true })
  @Field(() => [ID], { defaultValue: [] })
  genres: string[];
}
