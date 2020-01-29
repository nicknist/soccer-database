const matchData = require('../../../matchData');

const getMatchInfo = async (knex, match) => {
  let thing = await knex('matches').where({
    date: match.date,
    team1_name: match.team1,
    team2_name: match.team2
  });
  return thing[0];
}

const findTeamId = async (knex, nameSearch) => {
  let thing = await knex('teams').where({ name: nameSearch }).select('id');
  return thing[0].id;
}

const createTeamMatch = async (knex, match) => {
  let matchObject = await getMatchInfo(knex, match);
  let teamMatch = await knex('teams_matches').insert({
    match_id: matchObject.id,
    team1_id: await findTeamId(knex, matchObject.team1_name),
    team2_id: await findTeamId(knex, matchObject.team2_name)
  });

  return teamMatch;
}

exports.seed = async (knex) => {
  try {
    await knex('teams_matches').del();

    let matchPromises = matchData.map(match => createTeamMatch(knex, match));

    return Promise.all(matchPromises);
  } catch(error) {
    console.log(`Error has occured with Teams_Match Data ${error}`);
  }
};
