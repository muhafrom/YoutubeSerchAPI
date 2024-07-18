const mongoose = require("mongoose");

// Define a schema for search results
const searchResultSchema = new mongoose.Schema(
  {
    query: { type: String, required: true },
    results: [
      {
        title: String,
        link: String,
        snippet: String,
        description: String, 
        viewCount: Number, 
        likeCount: Number
      },
    ],
  },
  { timestamps: true },
);

module.exports = mongoose.model("SearchResult", searchResultSchema);
