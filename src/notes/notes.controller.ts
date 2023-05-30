import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { GoogleAuthGuard } from 'src/auth/utils/Guards';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) { }

  @UseGuards(GoogleAuthGuard)
  @Post()
  create(@Body() createNoteDto: CreateNoteDto) {
    return this.notesService.create(createNoteDto);
  }

  @UseGuards(GoogleAuthGuard)
  @Get()
  findAll() {
    return this.notesService.findAll();
  }

  @UseGuards(GoogleAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notesService.findOne(+id);
  }

  @UseGuards(GoogleAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    return this.notesService.update(+id, updateNoteDto);
  }

  @UseGuards(GoogleAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notesService.remove(+id);
  }
}
