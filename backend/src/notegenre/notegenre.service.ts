import { Injectable } from '@nestjs/common';
import { NoteGenreRepository } from './notegenre.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { NoteGenre } from './notegenre.entity';
import { v4 as uuid } from 'uuid';
import { CreateNoteGenreInput } from './dto/create-notegenre.input';

@Injectable()
export class NotegenreService {
  constructor(
    @InjectRepository(NoteGenre)
    private readonly notegenreRepository: NoteGenreRepository,
  ) {}
  async getNoteGenres(): Promise<NoteGenre[]> {
    return this.notegenreRepository.find();
  }
  async crearNota(createNoteInput: CreateNoteGenreInput): Promise<NoteGenre> {
    const { name } = createNoteInput;
    const note = this.notegenreRepository.create({
      id: uuid(),
      name,
    });
    return this.notegenreRepository.save(note);
  }
  async deleteNoteGenre(id: string) {
    let noteGenreToDelete = this.notegenreRepository.findOneBy({ id });
    if (noteGenreToDelete) {
      this.notegenreRepository.findOneAndDelete({ id });
      return noteGenreToDelete;
    } else {
      return null;
    }
  }
  async getManyGenres(genresIds: string[]): Promise<NoteGenre[]> {
    return this.notegenreRepository.find({
      where: {
        id: {
          $in: genresIds,
        },
      },
    });
  }
}
