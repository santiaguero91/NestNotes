import { Entity, Column, ObjectIdColumn, PrimaryColumn } from 'typeorm';


@Entity()
export class NoteGenre {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;
}