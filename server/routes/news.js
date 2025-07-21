
const express = require('express');
const axios = require('axios');
const router = express.Router();

const API_KEY = '960f16e0d6c8d669ad3c8236ab851095';

// Map country names to ISO 2-letter country codes supported by mediastack
const countryCodeMap = {
  "USA": "us",
  "Canada": "ca",
  "Germany": "de",
  "France": "fr",
  "UK": "gb",
  "Japan": "jp",
  "Australia": "au",
  "India": "in",
  "Brazil": "br",
  "South Africa": "za",
  "Mexico": "mx",
  "Italy": "it",
  "Russia": "ru",
  "Spain": "es",
  "China": "cn",
  "South Korea": "kr",
  "Netherlands": "nl",
  "Sweden": "se",
  "Norway": "no",
  "Switzerland": "ch"
};

// Endpoint: /api/news/:countryName
router.get('/:countryName', async (req, res) => {
  const countryName = req.params.countryName;
  const countryCode = countryCodeMap[countryName];

  if (!countryCode) {
    return res.status(400).json({ error: "Unsupported country" });
  }

  try {
    const response = await axios.get('http://api.mediastack.com/v1/news', {
      params: {
        access_key: API_KEY,
        countries: countryCode,
        limit: 5,
        sort: 'published_desc',
        languages: 'en'
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching news:", error.message);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

module.exports = router;
