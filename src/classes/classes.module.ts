import { Module } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { ClassesController } from './classes.controller';
import { ClassesResolver } from './classes.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Class, ClassSchema } from './dto/classes.dto';
import { StudentsModule } from '../students/students.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Class.name, schema: ClassSchema }]),
    StudentsModule,
  ],
  providers: [ClassesService, ClassesResolver],
  controllers: [ClassesController],
})
export class ClassesModule {}
