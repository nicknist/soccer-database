
exports.up = knex => {
  return knex.schema
    .createTable('teams', table => {
      table.increments('id').primary();
      table.string('name');
      table.string('league');
      table.integer('rank').unsigned();
      table.decimal('spi');

      table.timestamps(true, true);
    })
    .createTable('matches', table => {
      table.increments('id').primary();
      table.string('date');
      table.string('team1_name');
      table.integer('team1_id').unsigned();
      table.foreign('team1_id').references('teams.id');
      table.integer('team1_score').unsigned();
      table.string('team2_name');
      table.integer('team2_id').unsigned();
      table.foreign('team2_id').references('teams.id');
      table.integer('team2_score').unsigned();

      table.timestamps(true, true);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('matches')
    .dropTable('teams')
};
