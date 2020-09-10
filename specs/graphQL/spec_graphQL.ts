import { describe } from 'mocha';
import { buildSchema, graphql } from 'graphql'
import { specification, when, then } from '../../lib/mocha-bdd';


specification('Automation Practice Automation', () => {

  when('Sample test case for GraphQL', async () => {
    then('Create a GraphQL json string.', async () => {
      var schema = buildSchema(`
      type Query {
        hello: String
      }
    `);

      var root = { hello: () => 'Hello world!' };

      graphql(schema, '{ hello }', root).then((response) => {
        console.log(response);
      });
    });

    after(async () => {

    });
  });

});
