import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MongoAbstractService } from '../commons/mongo-abstract-service';
import { Model } from 'mongoose';
import { Student } from './dto/students.dto';

@Injectable()
export class StudentsService extends MongoAbstractService<Student> {
  constructor(
    @InjectModel(Student.name) private readonly studentModel: Model<Student>,
  ) {
    super(studentModel);
  }

  async addCourseToStudent(
    studentId: string,
    courseId: string,
  ): Promise<Student> {
    return await this.studentModel
      .findByIdAndUpdate(
        studentId,
        { $push: { courses: courseId } },
        { new: true },
      )
      .exec();
  }
}
