import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    greet: String
    allUsers: [User]
  }

  type User {
    id: ID!
    firstName: String
    lastName: String
    email: String
  }

  type Mutation {
    createUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): User

    deleteUser(firstName: String!): [User]
  }
`;

export default typeDefs;
