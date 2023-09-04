import { Injectable } from '@nestjs/common';
import { CreateNoteInput } from './dto/create-note.input';
import { UpdateNoteInput } from './dto/update-note.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from './note.entity';
import { NoteRepository } from './notes.repository';
import { v4 as uuid } from 'uuid';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note) private readonly noteRepository: NoteRepository,
  ) {}

  async getAllNotes(): Promise<Note[]> {
    return this.noteRepository.find();
  }

  async getOneNote(id: string): Promise<Note> {
    return this.noteRepository.findOneBy({ id });
  }

  async getSomeNotes(category: string): Promise<Note[]> {
    return this.noteRepository.find({ where: { category: category } });
  }

  async deleteNote(id: string): Promise<Note> {
    const noteToDelete = await this.noteRepository.findOneBy({ id });
    await this.noteRepository.findOneAndDelete({ id });
    if (noteToDelete) {
      await this.noteRepository.delete({ id });
      return noteToDelete;
    } else {
      throw new Error("Note not found");
    }
  }
  async crearNota(createNoteInput: CreateNoteInput): Promise<Note> {
    const { name, description, category,genres} = createNoteInput;
    const note = this.noteRepository.create({
      id: uuid(),
      name,
      description,
      category,
      genres
    });
    return this.noteRepository.save(note);
  }
  async updateNote(updateNoteInput: UpdateNoteInput): Promise<Note> {
    const { id, name, description, category,genres } = updateNoteInput;
    const note = await this.noteRepository.findOneBy({ id });
    if (!note) {
      throw new Error('Note not found');
    }
    note.name = name;
    note.description = description;
    note.category = category;
    note.genres = genres
    return this.noteRepository.save(note);
  }

   async assignGenrestoNote(
    noteId: string,
    genreIds: string[],
  ): Promise<Note> {
    const note = await this.noteRepository.findOneBy({ id: noteId });
    note.genres = [...note.genres, ...genreIds];
    return this.noteRepository.save(note);
  } 

  
}
