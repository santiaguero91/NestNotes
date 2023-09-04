import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Notegenre')
export class NotesGenreType {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;
}