import { GraphQLSchema, GraphQLObjectType, GraphQLID } from "graphql";

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    fields: {
      user: {
        type: userType,
        args: {
          id: { type: GraphQLID },
        },
        resolve: (_, args) => {
          return {
            id: args.id,
            name: "Mayer",
            lastname: "Chaves",
            email: "mayer@example.com",
            avatar: "https://placeimg.com/640/480/people",
          };
        },
      },
      message: {
        type: messageType,
        args: {
          id: { type: GraphQLID },
        },
        resolve: (_, args) => {
          return {
            id: args.id,
            body: "Hola Mayer",
            from: {
              name: "Mayer",
            },
            to: {
              name: "Andres",
            },
            readed: true,
          };
        },
      },
      house: {
        type: houseType,
        args: {
          id: { type: GraphQLID },
        },
        resolve: (_, args) => {
          return {
            id: args.id,
            address: "Calle 123",
            city: "Bogota",
            state: "Cundinamarca",
            size: 100,
            type: "apartment",
            zip_code: "123456",
            code: "ABCD1234",
            rooms: 3,
            bathrooms: 2,
            price: 1000000,
            image: "https://placeimg.com/640/480/people",
          };
        },
      },
    },
  }),
});
