const matchData = require('../../../matchData');

const createMatch = async (knex, match) => {

  let matchId = await knex('matches').insert({
    date: match.date,
    team1_name: match.team1,
    team1_score: parseInt(match.score1),
    team2_name: match.team2,
    team2_score: parseInt(match.score2),
  }, 'id');

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
