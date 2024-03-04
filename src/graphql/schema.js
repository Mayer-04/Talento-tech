import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLBoolean,
} from "graphql";

export const userType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    lastname: { type: GraphQLString },
    email: { type: GraphQLString },
    avatar: { type: GraphQLString },
  }),
});

export const messageType = new GraphQLObjectType({
  name: "Message",
  fields: () => ({
    id: { type: GraphQLID },
    body: { type: GraphQLString },
    from: { type: userType },
    to: { type: userType },
    readed: { type: GraphQLBoolean },
  }),
});

export const houseType = new GraphQLObjectType({
  name: "House",
  fields: () => ({
    id: { type: GraphQLID },
    address: { type: GraphQLString },
    city: { type: GraphQLString },
    state: { type: GraphQLString },
    size: { type: GraphQLInt },
    type: { type: GraphQLString },
    zip_code: { type: GraphQLString },
    code: { type: GraphQLString },
    rooms: { type: GraphQLInt },
    bathrooms: { type: GraphQLInt },
    price: { type: GraphQLInt },
    image: { type: GraphQLString },
  }),
});
