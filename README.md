# Football Matches

*JSON API URL :*
`https://jsonmock.hackerrank.com/api/football_competitions?year={selectedYear}`

## Expected Outputs 

- `Match {name} won by {winner}`

- `No Matches Found`

- `Total Matches: {count}`

## Environment 

- Angular CLI Version: 10.0.4
- Angular Core Version: 10.0.4
- Node Version: v12(LTS)
- Default Port: 8000

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/14zCqconWODStDEpMrZ1Cw/football.gif)

## Functionality Requirements

The component must have the following functionalities:

- A list of years from 2011-2017 is given.

- Clicking on any year should make an API GET call to the URL `https://jsonmock.hackerrank.com/api/football_competitions?year={selectedYear}` using the Angular HttpClient module. Here, {selectedYear} is the year clicked by the user from the list. For example, if 2011 is clicked, the API hit has to be `https://jsonmock.hackerrank.com/api/football_competitions?year=2011`.

- The response of the GET call will contain a data field that is an array of match records for the requested year. The sample format of the response is:

  ```
    {
      "page": "1",
      "per_page": 2,
      "total": 2,
      "total_pages": 1,
      "data": [{
        "name": "English Premier League",
        "country": "England",
        "year": 2016,
        "winner": "Chelsea",
        "runnerup": "Tottenham Hotspur"
      },
      {
        "name": "La Liga",
        "country": "Spain",
        "year": 2011,
        "winner": "Real Madrid",
        "runnerup": "FC Barcelona"
      }]
    }
  ```

- Count the number of match objects returned and show `<div data-test-id="total-matches">Total Matches: {totalMatches}</div>` . Here {totalMatches} refers to the total number of match objects.

- This element must be visible only when the data is a non-empty array. This div should not be rendered initially since no API has been hit yet.

- For the matches returned by the API, you need to render the list `<ul data-test-id="match-list"></ul>`. This list should have a single `<li>` list item for each object in the array. The value of each `<li>` element should be `<li>Match {name} won by {winner}</li>` where {name} and {winner} are values retrieved from the corresponding match object.

- The data list `<ul data-test-id="match-list"></ul>` must be visible only when the data is a non-empty array. It should not be rendered initially since no API has been hit yet.

- For example, in the above data example, there are 3 match objects in the array, so there will be 3 <li> elements inside the <ul> element:
    1. `<li>Match League 1 won by Montpellier HSC</li>`
    2. `<li>Match Serie A won by Juventus</li>`
    3. `<li>Match Bundesliga won by Borussia Dortmund</li>`

- If no match records are returned by the API, you must render `<div data-test-id="no-result">No Matches Found</div>`. This element must be visible only when the data field is an empty array. This div should not be rendered initially since no API has been hit yet.

## Testing Requirements

- The year list should have the data-test-id attribute 'year-list'.
- The 'Total Matches' div should have the data-test-id attribute 'total-matches'.
- The `<ul>` should have the data-test-id attribute 'match-list'.
- The 'No Matches Found' div should have the data-test-id attribute 'no-result'.

## Project Specifications

**Read Only Files**
- src/app/football-matches/football-matches.component.spec.ts
- src/app/app.component.spec.ts
- src/app/app.component.ts
- src/app/app.module.ts

**Commands**
- run: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm start
```
- install: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm install
```
- test: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm test
```
