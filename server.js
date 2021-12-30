// importing libs
const { ApolloServer } = require("apollo-server");

// importing dbs
const db = require("./models");

// importing schema
const typeDefs = require("./schemas/schema");

// importing resolvers
const resolvers = require("./resolvers");

// defining server
const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: db
});

// listening to server
server.listen().then(({ url }) => {
	console.log(`server started running ${url}`);
});
