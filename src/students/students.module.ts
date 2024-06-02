import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { StudentsResolver } from './students.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from './dto/students.dto';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
  ],
  providers: [StudentsService, StudentsResolver],
  controllers: [StudentsController],
  exports: [StudentsService],
})
export class StudentsModule {}
