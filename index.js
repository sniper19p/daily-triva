const axios = require('axios');

function getDailyQuestions() {
  return axios.get('https://opentdb.com/api.php?amount=10')
    .then(response => {
      const questions = response.data.results;
      return questions;
    })
    .catch(error => {
      console.error(error);
    });
}

module.exports = { getDailyQuestions };
