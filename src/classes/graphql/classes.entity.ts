import { Field, ObjectType } from '@nestjs/graphql';
import { StudentsEntity } from '../../students/graphql/students.entity';

@ObjectType()
export class ClassesEntity {
  @Field(() => String, { nullable: false })
  id: string;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  description: string;

  @Field(() => [StudentsEntity], { nullable: false })
  students: StudentsEntity[];
}
