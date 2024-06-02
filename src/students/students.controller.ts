import {
  Controller,
  Body,
  Put,
  Delete,
  Post,
  Get,
  Param,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { Student } from './dto/students.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  async findAll(): Promise<Student[]> {
    return this.studentsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Student> {
    return this.studentsService.findOne(id);
  }

  @Post()
  async create(@Body() student: Student): Promise<Student> {
    return this.studentsService.create(student);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() student: Student,
  ): Promise<Student> {
    return this.studentsService.update(id, student);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Student> {
    return this.studentsService.delete(id);
  }
}
