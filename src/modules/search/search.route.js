const express = require("express");
const SearchController = require("./search.controller");

const router = express.Router();

router.post("/search", SearchController.SearchController);

module.exports = router;
