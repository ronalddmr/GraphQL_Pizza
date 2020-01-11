//const { db } = require("./cnn");
const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
const PORT = 3000;
const endPoint = 'pizza_api';
const schema= {};
let server = express();

server.use(endPoint, bodyParser.json(), graphqlExpress({
    schema
}));

server.use('/graphiql', graphiqlExpress({
    endpointURL: endPoint,
}));

server.listen(PORT, () => {
    console.log("GraphQl API listen in http://localhost:" + PORT +'/'+ endPoint);
    console.log("GraphiQl listen in http://localhost:" + PORT + '/graphiql');
});
console.log('OK!!');