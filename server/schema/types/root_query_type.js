const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;

const RootQueryType = new GraphQLObjectType({
  //by default graphql expects to have at least one field available for every single defined type 
  name: 'RootQueryType',
  fields: {
    dummyField: { type: GraphQLID }
  }
});

module.exports = RootQueryType;
