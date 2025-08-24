import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestDocsModule } from './test-docs/test-docs.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { HelloWorldModule } from './hello-world/hello-world.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      path: '/graphql',
      formatError: (error) => {
        if (error.extensions?.code === 'GRAPHQL_VALIDATION_FAILED') {
          return {
            message: 'Invalid GraphQL query syntax.',
            extensions: { code: 'GRAPHQL_VALIDATION_FAILED'},
          }
        }
        return error
      }
    }),
    TestDocsModule,
    ConfigModule.forRoot({ isGlobal: true}),
    MongooseModule.forRoot(process.env.MONGO_URI!),
    HelloWorldModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
