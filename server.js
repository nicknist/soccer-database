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
    response.status(200).json(matches);
  } catch (error) {
    response.status(500).json({ error });
  }
});

app.get('/api/v1/teams/:id', async (request, response) => {
  try {
    const team = await database('teams').where({ id: request.params.id })
    if (!team[0]) {
      response.status(404).json({ error: 'Team not found' });
    } else {
      response.status(201).json(team[0]);
    }
  } catch (error) {
    response.status(500).json({ error });
  }
});

app.get('/api/v1/matches/:id', async (request, response) => {
  try {
    const match = await database('matches').where({ id: request.params.id });
    if (!match[0]) {
      response.status(404).json({ error: 'Match not found' });
    } else {
      response.status(201).json(match[0]);
    }
  } catch (error) {
    response.status(500).json({ error });
  }
});

app.post('/api/v1/teams', async (request, response) => {
  const team = request.body

  for (let requiredParameter of ['name', 'league', 'rank', 'spi']) {
    if (!team[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: {
          name: <String>,
          league: <String>,
          rank: <Number>,
          spi: <Number>
        }. You're missing a "${requiredParameter}" property.`})
    }
  }

  try {
    const id = await database('teams').insert(team, 'id');
    response.status(201).json({ id: id[0] });
  } catch (error) {
    response.status(500).json({ error });
  }
});

app.post('/api/v1/matches', async (request, response) => {
  const match = request.body;

  for (let requiredParameter of ['date', 'team1_name', 'team1_score', 'team2_name', 'team2_score']) {
    if (!match[requiredParameter]) {
      return response
      .status(422)
      .send({ error: `Expected format: {
        date: <String>,
        team1_name: <String>,
        team1_score: <String>,
        team2_name: <String>,
        team2_score: <String>
      }. You're missing a "${requiredParameter}" property.`})
    }
  }

  try {
    const id = await database('matches').insert(match, 'id');
    response.status(201).json({ id: id[0] });
  } catch (error) {
    response.status(500).json({ error });
  }
});

app.delete('/api/v1/matches/:id', async (request, response) => {
  try {
    await database('matches').where({ id: request.params.id }).del();
    response.status(204).json();
  } catch (error) {
    response.status(500).json({ error });
  }
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
