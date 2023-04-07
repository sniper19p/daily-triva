const axios = require('axios');

function getRandomQuotes(numQuotes = 1, author = null) {
  let apiUrl = 'https://type.fit/api/quotes';
  if (author) {
    apiUrl += `?author=${author}`;
  }
  apiUrl += `&amount=${numQuotes}`;

  return axios.get(apiUrl)
    .then(response => {
      const quotes = response.data;
      return quotes;
    })
    .catch(error => {
      console.error(error);
    });
}

module.exports = { getRandomQuotes };
