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
const randomQuotes = require('daily-trivia');

// Get a single random quote
randomQuotes.getRandomQuotes().then(quotes => {
  console.log(quotes[0]);
});

// Get 5 random quotes
randomQuotes.getRandomQuotes(5).then(quotes => {
  console.log(quotes);
});

// Get 5 random quotes by Albert Einstein
randomQuotes.getRandomQuotes(5, 'Albert Einstein').then(quotes => {
  console.log(quotes);
});

  ```
The getRandomQuotes function accepts the following optional parameters:

numQuotes: The number of quotes to retrieve. Defaults to 1 if not specified.
author: The author of the quotes to retrieve.
keyword: This parameter is no longer available.
This function returns a Promise that resolves to an array of quote objects, where each object has the following properties:

text: The text of the quote.
author: The author of the quote (if available).
source: The source of the quote (if available).



## License
This project is licensed under the MIT License - see the LICENSE file for details.

