# randomQuestions
Mad libs style random question generator.  Can be used for bot testing or qe projects in general or anything really.
Presently you can generate a random question or name , a small set right now but will be expanded soon. Contributions very much welcome!

Install with
 `npm install --save random-questions`

Include in your project 

```
const {getQuestion, getPersonName} = require('random-questions');

getQuestion(); \\ returns a random question 

getPersonName(); \\ returns a random first and last name
```

