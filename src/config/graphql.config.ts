import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

export const GraphQLConfig: (
  ...args: any[]
) => ApolloDriverConfig = () => ({
  driver: ApolloDriver,
  playground: true,
  autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  sortSchema: true
});
