const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const routes = require("./routes");

const graphqlServer = require("./graphql");

// Rest
app.use(bodyParser.json());
app.use(routes);

// GraphQl
graphqlServer.applyMiddleware({ app });

app.listen(3000, (err) => console.log("Server Running on port 3000"));
