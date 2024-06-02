import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class StudentsEntity {
  @Field(() => String, { nullable: false })
  id: string;

  @Field(() => String, { nullable: false })
  firstName: string;

  @Field(() => String, { nullable: false })
  lastName: string;

  @Field(() => String, { nullable: false })
  age: number;

  @Field(() => String, { nullable: false })
  email: string;

  @Field(() => [String], { nullable: false })
  courses: string[];
}
