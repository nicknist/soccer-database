# Soccer Database

## Endpoints Documentation

| Purpose       | URL              | Verb | Request Body | Sample Response (Happy Path) |
|---------------|------------------|------|--------------|------------------------------|
|Get all teams  |/api/v1/teams     | GET  | N/A          | All teams in the database in an array: ```[{ id: 1, name: "Bayern Munich", league: "German Bundesliga", rank: 1, spi: 93.10, created_at: "date", updated_at: "date" }]```|
|Get all matches|/api/v1/matches   | GET  | N/A          | All matches in the database in an array: ```[{ id: 7, date: "date", team1_name: "Barcelona", team1_score: 5, team2_name: "Real Madrid", team2_score: 0, created_at: "date", updated_at: "date" }]```|
|
|
|
|
|
|
|

#### Error Responses:
- For all GET requests, the error code 500 means that the server is down. If there is an error or the information is not coming through, make sure to double check your url and that you're requesting the correct information
