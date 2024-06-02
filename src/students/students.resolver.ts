import { Resolver, Query, Args } from '@nestjs/graphql';
import { StudentsService } from './students.service';
import { ResolverAbstract } from '../commons/resolver-abstract';
import { StudentsEntity } from './graphql/students.entity';
import { StudentsInput } from './graphql/students.input';

@Resolver(() => StudentsEntity)
export class StudentsResolver  {
  constructor(private readonly studentsService: StudentsService) {}

  @Query(() => [StudentsEntity])
  async findAllStudents() {
    return await this.studentsService.findAll();
  }

  @Query(() => StudentsEntity)
  async findOneStudent(@Args('id') id: string) {
    return await this.studentsService.findOne(id);
  }
}
