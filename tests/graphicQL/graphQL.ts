import { describe } from 'mocha';
import { buildSchema, graphql } from 'graphql'

describe('Users can submit ideas', async () => {

  it("Sample test case for GraphQL", async () => {
    var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = { hello: () => 'Hello world!' };

graphql(schema, '{ hello }', root).then((response) => {
  console.log(response);
});

  })

  after(async () => {

  });
});
