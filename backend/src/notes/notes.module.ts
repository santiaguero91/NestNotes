import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesResolver } from './notes.resolver';
import { Note } from './note.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteRepository } from './notes.repository';
import { NotegenreModule } from 'src/notegenre/notegenre.module';

@Module({
  imports: [TypeOrmModule.forFeature([Note]), NotegenreModule],
  providers: [NotesResolver, NotesService, NoteRepository],
  exports: [NotesService, NoteRepository],
})
export class NotesModule {}
