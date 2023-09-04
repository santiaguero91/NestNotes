import { Resolver, Query, Mutation, Args, Int, Parent, ResolveField } from '@nestjs/graphql';
import { NotesService } from './notes.service';
import { Note } from './note.entity';
import { CreateNoteInput } from './dto/create-note.input';
import { UpdateNoteInput } from './dto/update-note.input';
import { NotesType } from './notes.type';
import { AssignGenreToNoteInput } from './dto/assign-genre-to-note.input';
import { NotegenreService } from 'src/notegenre/notegenre.service';

@Resolver(() => NotesType)
export class NotesResolver {
  constructor(
    private notesService: NotesService,
    private notegenreService: NotegenreService
    ) {}

  @Query((returns) => [NotesType])
  getAllNotes() {
    return this.notesService.getAllNotes();
  }
  @Query((returns) => NotesType)
  getOneNote(@Args('id') id: string) {
    return this.notesService.getOneNote(id);
  }
  @Query((returns) => [NotesType])
  getSomeNotes(@Args('category') category: string) {
    return this.notesService.getSomeNotes(category);
  }

//TODO
@Mutation((returns) => NotesType)
async removeNote(@Args('id') id: string) {
  const noteToDelete = await this.notesService.deleteNote(id);
  return noteToDelete;
}
  @Mutation((returns) => NotesType)
  createNote(@Args('createNoteInput') createNoteInput: CreateNoteInput) {
    return this.notesService.crearNota(createNoteInput);
  }
  @Mutation((returns) => NotesType)
  updateNote(@Args('updateNoteInput') updateNoteInput: UpdateNoteInput) {
    return this.notesService.updateNote(updateNoteInput);
  }

   @Mutation((returns) => NotesType)
  assignGenrestoNote(
    @Args('assignGenrestoNoteInput')
    assignGenrestoNoteInput: AssignGenreToNoteInput,
  ) {
    const { noteId, genreIds } = assignGenrestoNoteInput;
    return this.notesService.assignGenrestoNote(noteId, genreIds);
  }

  
    @ResolveField()
  async genres(@Parent() note: Note) {
    return this.notegenreService.getManyGenres(note.genres);
  } 
  
}
