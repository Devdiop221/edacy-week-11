import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { ClassesModule } from './classes/classes.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RouterModule, Routes } from '@nestjs/core';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';

const routes: Routes = [
  {
    path: 'courses',
    module: ClassesModule,
    children: [
      {
        path: ':students',
        module: StudentsModule,
      },
    ],
  },
];

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    RouterModule.register(routes),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: 'schema.gql',
    }),
    StudentsModule,
    ClassesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
