import { Query, Resolver } from '@nestjs/graphql';
import { HelloWorldDto } from './hello-world.dto';
import { HelloWorldService } from './hello-world.service';
import { createGraphQLError } from '../common/errors/graphql-error.util';
import { ErrorCode } from '../common/errors/error-codes.enum';

@Resolver(() => HelloWorldDto)
export class HelloWorldResolver {
    constructor( private helloWorldService: HelloWorldService) {
        console.log(`HelloWorldResolver initialized`);
    }

    @Query(() => HelloWorldDto)
    result(): HelloWorldDto {
        try {
            return this.helloWorldService.getMessage();
        } catch (error) {
            throw createGraphQLError('Query failed', ErrorCode.QUERY_FAILED);
        }
    }
}
