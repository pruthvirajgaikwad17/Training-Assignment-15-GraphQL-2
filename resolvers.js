import { quotes, users } from "./userData.js";

const resolvers = {
  Query: {
    greet: () => {
      return "Hello World";
    },
    allUsers: () => {
      return users;
    },
  },

  Mutation: {
    createUser: (_, { firstName, lastName, email, password }) => {
      const new_id = users.length + 1;
      users.push({
        id: new_id,
        firstName,
        lastName,
        email,
        password,
      });

      return users.find((ur) => ur.id == new_id);
    },
    deleteUser: (_, { firstName }) => {
      const index = users.findIndex((x) => x.firstName === firstName);

      console.log(index);
      users.splice(index, 1);
      return users;
    },
  },
};

export default resolvers;
