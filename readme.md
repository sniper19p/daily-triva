# Daily Trivia Questions API

This is a simple Node.js module to retrieve daily trivia questions from the Open Trivia Database API. It utilizes the Axios library to make an HTTP GET request to the API and returns an array of 10 random questions.

## Installation

To use this module, first install it using npm:

```sh
npm install daily-trivia
```
## Usage
To use this module in your Node.js project, require it and call the getDailyQuestions function:
```sh
const dailyTrivia = require('daily-trivia');

dailyTrivia.getDailyQuestions()
  .then(questions => {
    console.log(questions);
  })
  .catch(error => {
    console.error(error);
  });

  ```
  This will log an array of 10 random trivia questions to the console.


## License
This project is licensed under the MIT License - see the LICENSE file for details.

