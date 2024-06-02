import { Injectable } from '@nestjs/common';
import { MongoAbstractService } from '../commons/mongo-abstract-service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Class } from './dto/classes.dto';

@Injectable()
export class ClassesService extends MongoAbstractService<Class> {
  constructor(
    @InjectModel(Class.name) private readonly classModel: Model<Class>,
  ) {
    super(classModel);
  }

  async addStudentToClass(classId: string, studentId: string): Promise<Class> {
    return await this.classModel
      .findByIdAndUpdate(
        classId,
        { $push: { students: studentId } },
        { new: true },
      )
      .exec();
  }
}
