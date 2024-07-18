const SearchGoogle = require("../../utils/youtubeSearch");
const SearchResultModel = require("../../models/SearchResult");

const SearchController = async (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res
      .status(400)
      .json({ success: false, message: "Query is required" });
  }

  try {
    const searchResponse = await SearchGoogle(query);

    const searchResult = await SearchResultModel.create({
      query: query,
      results: searchResponse.items.map((item) => ({
        title: item.title,
        link: item.link,
        snippet: item.snippet
      })),
    });

    return res.json({ success: true, searchResult });
  } catch (err) {
    console.error("Error fetching and saving search results:", err);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch and save search results",
    });
  }
};

module.exports = { SearchController };
