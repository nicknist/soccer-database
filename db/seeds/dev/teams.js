const teamsData = require('../../../teamsData');

const createTeam = async (knex, team) => {
  const teamId = await knex('teams').insert({
    name: team.name,
    league: team.league,
    rank: team.rank,
    spi: team.spi
  }, 'id');

  return teamId;
}

exports.seed = async (knex) => {
  try {
    await knex('teams').del()

    let teamPromises = teamsData.map(team => createTeam(knex, team));

    return Promise.all(teamPromises);
  } catch (error) {
    console.log(`Error seeding data: ${error}`);
  }
};
