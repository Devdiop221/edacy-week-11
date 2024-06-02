import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClassesService } from './classes.service';
import { Class } from './dto/classes.dto';
import { StudentsService } from '../students/students.service';

@Controller('classes')
export class ClassesController {
  constructor(
    private readonly classesService: ClassesService,
    private readonly studentsService: StudentsService,
  ) {}

  @Get()
  async findAll(): Promise<Class[]> {
    return this.classesService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Class> {
    return this.classesService.findOne(id);
  }

  @Post()
  async create(@Body() classDto: Class): Promise<Class> {
    return this.classesService.create(classDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() classDto: Class,
  ): Promise<Class> {
    return this.classesService.update(id, classDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Class> {
    return this.classesService.delete(id);
  }

  @Put(':id/add-student/:studentId')
  async addStudentToClass(
    @Param('id') classId: string,
    @Param('studentId') studentId: string,
  ): Promise<Class> {
    return this.classesService.addStudentToClass(classId, studentId);
  }
}
