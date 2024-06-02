import { Type } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MongoAbstractService } from './mongo-abstract-service';

export function ResolverAbstract<T extends Type<unknown>>(TClass: Type<T>) {
  @Resolver(() => TClass)
  class ResolverAbstractService {
    constructor(readonly service: MongoAbstractService<T>) {}

    @Query(() => [TClass])
    async findAll() {
      return await this.service.findAll();
    }

    @Query(() => TClass)
    async findOne(@Args('id') id: string) {
      return await this.service.findOne(id);
    }

    @Mutation(() => TClass)
    async create(@Args('data') data: T) {
      return await this.service.create(data);
    }

    @Mutation(() => TClass)
    async update(@Args('id') id: string, @Args('data') data: T) {
      return await this.service.update(id, data);
    }

    @Mutation(() => TClass)
    async delete(@Args('id') id: string) {
      return await this.service.delete(id);
    }
  }
  return ResolverAbstractService;
}
