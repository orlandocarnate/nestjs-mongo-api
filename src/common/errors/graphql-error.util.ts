import { GraphQLError } from 'graphql';
import { ErrorCode } from './error-codes.enum';

export function createGraphQLError(message: string, code: ErrorCode): GraphQLError {
  return new GraphQLError(message, {
    extensions: {
      code,
    },
  });
}
