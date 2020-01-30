const cors = require('cors');
const express = require('express');
const app = express();

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.use(express.json());
app.use(cors());

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Soccer Stats';

app.get('/api/v1/teams', async (request, response) => {
  try {
    const teams = await database('teams').select();
    response.status(200).json(teams);
  } catch (error) {
    response.status(500).json({ error });
  }
});

app.get('/api/v1/matches', async (request, response) => {
  try {
    const matches = await database('matches').select();
    response.status(500).json(matches);
  } catch (error) {
    response.status(500).json({ error });
  }
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
