const matchData = require('../../../matchData');

const findTeamId = (knex, nameSearch) => {
  return knex('teams').where({ name: nameSearch }).select('id');
}

const createMatch = async (knex, match) => {
  let team1id = await findTeamId(knex, match.team1);
  let team2id = await findTeamId(knex, match.team2);

  let matchId = await knex('matches').insert({
    date: match.date,
    team1_name: match.team1,
    team1_id: team1id[0].id,
    team1_score: parseInt(match.score1),
    team2_name: match.team2,
    team2_id: team2id[0].id,
    team2_score: parseInt(match.score2),
  }, 'id');

  console.log(matchId[0], team1id[0].id, team2id[0].id, parseInt(match.score1), parseInt(match.score2));
  return matchId[0];
}

exports.seed = async (knex) => {
  try {
    await knex('matches').del();

    let matchPromises = matchData.map(match => createMatch(knex, match));

    return Promise.all(matchPromises);
  } catch(error) {
    console.log(`Error has occured with MatchData ${error}`);
  }
};
