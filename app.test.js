import app from './app';

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.locals.title = 'Test Express';

const request = require('supertest');

describe('soccer stats api', () => {
  beforeEach(async () => {
    await database.raw('truncate table teams cascade');
    await database.raw('truncate table matches cascade');

    let team = {
      name: "Ben",
      league: "Golden",
      rank: 7,
      spi: 20,
    };
    let match = {
      team1_name: "John",
      team1_score: "40",
      team2_name: "Ben",
      team2_score: "0",
    };

    await database('teams').insert(team, 'id');
    await database('matches').insert(match, 'id');
  });

  afterEach(async () => {
    await database.raw('truncate table teams cascade');
    await database.raw('truncate table matches cascade');
  })

  describe('GET /api/v1/teams', () => {
    it('should return a 200 and all of the teams', async () => {
      const expectedTeams = await database('teams').select();
      const response = await request(app).get('/api/v1/teams');
      const teams = response.body;
      expect(response.status).toBe(200);
      expect(teams).toEqual(expectedTeams);
    });
  });

  describe('GET api/v1/matches', () => {
    it('should return a 200 and all of the matches', async () => {
      const expectedMatches = await database('matches').select();
      const response = await request(app).get('/api/v1/matches');
      const matches = response.body;
      expect(response.status).toBe(200);
      expect(matches).toEqual(expectedMatches);
    });
  });

  describe('GET /api/v1/teams/:id', () => {
    it('should return a single team based on the id', async () => {
      const expectTeam = await database('teams').first();
      const { id } = expectTeam;
      const response = await request(app).get(`/api/v1/teams/${id}`);
      expect(response.status).toBe(201);
      expect(response.body).toEqual(expectTeam);
    });

    it('should return a 404 when the team is not found', async () => {
      const expectTeam = await database('teams').select({ id: 10 });
      const response = await request(app).get('/api/v1/teams/10');
      expect(response.status).toBe(404);
    });
  });

  describe('GET /api/v1/matches/:id', () => {
    it('should return a single match based on the id', async () => {
      const expectMatch = await database('matches').first();
      const { id } = expectMatch
      const response = await request(app).get(`/api/v1/matches/${id}`);
      expect(response.status).toBe(201);
      expect(response.body).toEqual(expectMatch);
    });

    it('should return a 404 when the match is not found', async () => {
      const expectTeam = await database('matches').where({ id: 10 }).select();
      const response = await request(app).get('/api/v1/matches/10');
      expect(response.status).toBe(404);
    });
  });

  describe('POST /api/v1/teams', () => {
    it('should post a new team to the database', async () => {
      const newTeam = {
        name: "Ben",
        league: "Golden",
        rank: 7,
        spi: 20,
      };
      const response = await request(app).post('/api/v1/teams').send(newTeam);
      const teams = await database('teams').where({ id: response.body.id }).select()
      const team = teams[0];

      expect(response.status).toBe(201);
      expect(team.name).toEqual(newTeam.name);
    });

    it('should get an error with the missing parameter when there is one missing', async () => {
      const newTeam = {
        name: "Ben",
        rank: 7,
        spi: 20,
      };
      const response = await request(app).post('/api/v1/teams').send(newTeam);

      expect(response.body.error).toEqual(`Expected format: {
          name: <String>,
          league: <String>,
          rank: <Number>,
          spi: <Number>
        }. You're missing a "league" property.`);
    })
  });

  describe('POST /api/v1/matches', () => {
    it('should post a new match to the database', async () => {
      const newMatch = {
        date: "fake date",
        team1_name: "John",
        team1_score: "40",
        team2_name: "Ben",
        team2_score: "0",
      };
      const response = await request(app).post('/api/v1/matches').send(newMatch);
      const matches = await database('matches').where({ id: response.body.id }).select()
      const match = matches[0];

      expect(response.status).toBe(201);
      expect(match.team1_name).toEqual(newMatch.team1_name);
    });

    it('should get an error with the missing parameter when there is one missing', async () => {
      const newMatch = {
        team1_name: "John",
        team1_score: "40",
        team2_name: "Ben",
        team2_score: "0",
      };
      const response = await request(app).post('/api/v1/matches').send(newMatch);

      expect(response.body.error).toEqual(`Expected format: {
        date: <String>,
        team1_name: <String>,
        team1_score: <String>,
        team2_name: <String>,
        team2_score: <String>
      }. You're missing a "date" property.`);
    })
  });

  describe('DELETE /api/v1/matches/:id', () => {
    it('should return a 204 code and delete the match based on id', async () => {
      const expectMatch = await database('matches').first();
      const { id } = expectMatch
      const response = await request(app).delete(`/api/v1/matches/${id}`);
      const remainingMatches = await database('matches').select();

      expect(response.status).toBe(204);
      expect(remainingMatches).toEqual([]);
    });
  });
});
