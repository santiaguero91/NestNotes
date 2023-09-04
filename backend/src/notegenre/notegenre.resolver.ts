import { Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import { NoteGenre } from './notegenre.entity';
import { NotegenreService } from './notegenre.service';
import { NotesGenreType } from './notegenre.type';
import { CreateNoteGenreInput } from './dto/create-notegenre.input';

@Resolver(() => NoteGenre)
export class NoteGenreResolver {
  constructor(private readonly noteGenreService: NotegenreService) {}

  @Query((returns) => [NotesGenreType])
  getNoteGenres() {
    return this.noteGenreService.getNoteGenres();
  }

  @Mutation((returns) => NotesGenreType)
  createNoteGenre(@Args('createNoteInput') createNoteGenreInput: CreateNoteGenreInput) {
    return this.noteGenreService.crearNota(createNoteGenreInput);
  }
  @Mutation((returns) => NotesGenreType)
  removeNoteGenre(@Args('id') id: string) {
    return this.noteGenreService.deleteNoteGenre(id);
  }
}
