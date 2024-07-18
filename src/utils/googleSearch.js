const axios = require('axios');

const apiKey = process.env.GOOGLE_API_KEY;
const searchEngineId = process.env.GOOGLE_SEARCH_ENGINE_ID;

async function googleSearch(query) {
  const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(
    query,
  )}&key=${apiKey}&cx=${searchEngineId}`;
  // Fetch data from Google Custom Search API using axios
  try {
    const response = await axios.get(url);

    const data = response.data; // Axios response data is already parsed JSON

    return data;
  } catch (err) {
    if (axios.isAxiosError(err)) { console.log(err.response.data) }
    else {
      console.error(err)
    }
    throw new Error("Somthing went wrong");
  }
}

module.exports = googleSearch;
