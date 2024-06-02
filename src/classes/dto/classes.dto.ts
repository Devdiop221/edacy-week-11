import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Student } from '../../students/dto/students.dto';

@Schema()
export class Class {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  students: Student[];
}

export const ClassSchema = SchemaFactory.createForClass(Class);
