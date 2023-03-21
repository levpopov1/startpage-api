import { gql } from "apollo-server-core";

export const Schema = gql`
  type Query {
    people: [Person]
    person(id: ID!): Person
  }

  type Mutation {
    addPerson(data: PersonInput!): Person
    updatePerson(id: ID!, data: PersonInput!): Person
  }

  type Person {
    _id: ID!
    firstname: String
    surname: String
    gender: Gender
  }

  enum Gender {
    male
    female
  }

  input PersonInput {
    firstname: String
    surname: String
    gender: Gender
  }
`;
