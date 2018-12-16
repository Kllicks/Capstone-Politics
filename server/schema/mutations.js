const graphql = require('graphql');
const {
    GraphQLObjectType, 
    GraphQLString
} = graphql;

const UserType = require('./types/user_type');

//connnect to functions in auth.js
const AuthService = require('../services/auth');

//want mutations to feel repetitive b/c want them to be as simple and straightforward as possible. 
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
        },
        //logout mutation 
        logout: {
            type: UserType, 
            resolve(parentValue, args, req) {
                // req.logout removes the user property off the request object
                //so first save a ref to the user property then logout the user and then return the user.
                //aka getting passport and graphql to mesh together since passport is what is handling the signout of the user- but we need to instruct it to do so
                //optionally to clean up code could add another function to the auth service and move logic below into it. (still need to return user from that logout function)
                const { user } = req;
                req.logout();
                return user;
            }
        },
        //login mutation 
        login: {
            //what it returns 
            type: UserType,
            //what it expects to have 
            args: {
                email: { type: GraphQLString},
                password: { type: GraphQLString }
            },
            //here is what the mutation itself does /calls 
            resolve(parentValue, { email, password }, req) {
                //if need to know what this mutation does internally - need to go look at this external service
                //abstracting complicated code out to helper object where this function takes care of complexity 
                return AuthService.login({ email, password, req });
            }
        }
    }
});

module.exports = mutation;



