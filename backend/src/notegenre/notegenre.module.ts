import { Module } from '@nestjs/common';
import { NotegenreService } from './notegenre.service';
import { NoteGenre } from './notegenre.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteGenreResolver } from './notegenre.resolver';
import { NoteGenreRepository } from './notegenre.repository';

@Module({
  imports: [TypeOrmModule.forFeature([NoteGenre])],
  providers: [NotegenreService,NoteGenreResolver,NoteGenreRepository ],
  exports: [NotegenreService, NoteGenreRepository],

})
export class NotegenreModule {}
