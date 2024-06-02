import { Resolver } from '@nestjs/graphql';
import { ResolverAbstract } from '../commons/resolver-abstract';
import { ClassesEntity } from './graphql/classes.entity';
import { ClassesInput } from './graphql/classes.input';
import { ClassesService } from './classes.service';
import { StudentsEntity } from '../students/graphql/students.entity';
import { StudentsService } from '../students/students.service';
import { Class } from './dto/classes.dto';
import { Student } from '../students/dto/students.dto';

@Resolver()
export class ClassesResolver {
  constructor(
    private readonly classesService: ClassesService,
    private readonly studentsService: StudentsService,
  ) {}

  async addStudentToClass(classId: string, studentId: string): Promise<Class> {
    const student = await this.studentsService.findOne(studentId);
    if (!student) {
      throw new Error('Student not found');
    }
    return await this.classesService.addStudentToClass(classId, studentId);
  }
}
