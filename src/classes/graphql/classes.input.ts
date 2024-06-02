import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ClassesInput {
  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  description: string;

  @Field(() => [String], { nullable: false })
  students: string[];
}
