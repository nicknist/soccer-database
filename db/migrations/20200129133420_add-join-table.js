
exports.up = function(knex) {
  return knex.schema
    .createTable('teams_matches', table => {
      table.increments('id').primary();
      table.integer('match_id').unsigned();
      table.foreign('match_id').references('matches.id');
      table.integer('team1_id').unsigned();
      table.foreign('team1_id').references('teams.id');
      table.integer('team2_id').unsigned();
      table.foreign('team2_id').references('teams.id');
    })
    .table('matches', table => {
      table.dropColumn('team1_id');
      table.dropColumn('team2_id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('teams_matches')
    table('matches', table => {
      table.integer('team1_id').unsigned();
      table.foreign('team1_id').references('teams.id');
      table.integer('team2_id').unsigned();
      table.foreign('team2_id').references('teams.id');
    })
};
