import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Student {
  @Prop()
  id: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  age: number;

  @Prop()
  email: string;

  @Prop()
  courses: string[];
}

export const StudentSchema = SchemaFactory.createForClass(Student);
