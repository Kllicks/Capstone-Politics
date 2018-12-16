const graphql = require('graphql');
const {
    GraphQLObjectType, 
    GraphQLString
} = graphql;

const UserType = require('./types/user_type');

//connnect to functions in auth.js
const AuthService = require('../services/auth');


const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        //sign up mutation 
        signup: {
            type: UserType, 
            args: {
                email: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            //some documentations call request context instead  
            // request is incoming requests from our express server 
            //convention to shorten request to req 
            resolve(parentValue, { email, password }, req) {
                //returns a promise - when return a promise from resolve function need to make sure to return it - so graphql knows to look at the promise that gets returned to know to wait for operation to resolve before attempting to return any values to front end. 
                return AuthService.signup({ email, password, req });
            }
        }
    }
});

module.exports = mutation;