# Soccer Database

## Project Overview

- This project was to build our first backend and deploy it to heroku
- Tech Stack: Node.js, Express, Knex, PostgreSQL, and JavaScript
- The requirements were to create two tables that had at least a one-to-many relationship. This project has Soccer Teams and Soccer Matches, which is a many-to-many relationship. In order to accomplish this, I created a join table to make that relationship happen.

## Endpoints Documentation

| Purpose            | URL                 | Verb   | Request Body | Sample Response (Happy Path) |
|--------------------|---------------------|--------|--------------|------------------------------|
|Get all teams       |/api/v1/teams        | GET    | N/A          | All teams in the database in an array: ```[{ id: 1, name: "Bayern Munich", league: "German Bundesliga", rank: 1, spi: 93.10, created_at: "date", updated_at: "date" }]```|
|Get all matches     |/api/v1/matches      | GET    | N/A          | All matches in the database in an array: ```[{ id: 7, date: "date", team1_name: "Barcelona", team1_score: 5, team2_name: "Real Madrid", team2_score: 0, created_at: "date", updated_at: "date" }]```|
|Get a specific team |/api/v1/teams/:id    | GET    | N/A          | A specific team in the database in an object: ```{ id: 1, name: "Bayern Munich", league: "German Bundesliga", rank: 1, spi: 93.10, created_at: "date", updated_at: "date" }```|
|Get a specific match|/api/v1/matches/:id  | GET    | N/A          | A specific match in the database in an object: ```{ id: 7, date: "date", team1_name: "Barcelona", team1_score: 5, team2_name: "Real Madrid", team2_score: 0, created_at: "date", updated_at: "date" }```|
|Post a new Team     |/api/v1/teams        | POST   | ```{"name": "Nick Team", "league": "EPL", "rank": 72, "spi": 80}```| A new id from the team you posted in an object: ```{"id": 14723}```|
|Post a new Match     |/api/v1/matches     | POST   | ```{"date": "fake date", "team1_name": "John", "team1_score": 72, "team2_name": "Ben", "team2_score": 40}```| A new id from the match you posted in an object: ```{"id": 614487}```|
|Delete a Match       |/api/v1/matches/:id | DELETE | N/A        | 204 status code (NO CONTENT in response body |


#### Error Responses:
- For all GET requests, the success code 200 means that it was successful.
- For all GET requests, the error code 500 means that the server is down. If there is an error or the information is not coming through, make sure to double check your url and that you're requesting the correct information
- For all GET requests, the error code 404 means that the team or match has not been found. Please double check the team or match id and try again
- For all POST requests, the success code 201 means that there was a successful post request. It will return the object above.
- For all POST requests, the error code of 422 means that there is a missing parameter. The error code will let you know what is missing.
- For all POST requests, the error code of 500 means that the server is down. 
- For the DELETE request, the error code of 500 means that the server is down.
- For the DELETE request, the success code of 204 means that it was successful and no response object will be sent.
