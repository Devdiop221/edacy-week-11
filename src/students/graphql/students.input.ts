import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class StudentsInput {
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
