const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;
const UserType = require('./user_type');

const RootQueryType = new GraphQLObjectType({
  //by default graphql expects to have at least one field available for every single defined type 
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      //instruct graphql how to return that current user
      resolve(parentValue, args, req) {
        //if signed in return them - otherwise- return undefined/null
        return req.user;
      }
    }
  }
});

module.exports = RootQueryType;
