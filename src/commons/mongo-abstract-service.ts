import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class MongoAbstractService<T> {
  protected constructor(private readonly model: Model<T>) {}

  async create(data: T): Promise<T> {
    return await this.model.create(data);
  }

  async findAll(): Promise<T[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<T> {
    return await this.model.findById(id).exec();
  }

  async update(id: string, data: T): Promise<T> {
    return await this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<T> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
