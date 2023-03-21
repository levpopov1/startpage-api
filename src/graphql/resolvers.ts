export const Resolvers = {
  Query: {
    people: async (parent: any, args: any, context: any, info: any) => {
      return context.dataSources.peopleAPI.getPeople();
    },
    person: async (parent: any, args: any, context: any, info: any) => {
      return context.dataSources.peopleAPI.getPersonById(args.id);
    },
  },
  Mutation: {
    addPerson: async (parent: any, args: any, context: any, info: any) => {
      return context.dataSources.peopleAPI.createPerson(args.data);
    },
  },
};
