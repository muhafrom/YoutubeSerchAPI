const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const { connectToDb } = require("./dbConnection");

const SearchRouter = require("./modules/search/search.route");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(SearchRouter);

async function main() {
  await connectToDb();

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
}

module.exports = {
  app,
  main,
};
