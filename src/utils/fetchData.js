export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "<API-key>",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
  params: { limit: "100" },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "<API-key>",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
