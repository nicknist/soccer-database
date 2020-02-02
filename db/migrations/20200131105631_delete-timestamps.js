
exports.up = function(knex) {
  return knex.schema
    .table('teams', table => {
      table.dropColumn('updated_at')
      table.dropColumn('created_at')
    })
    .table('matches', table => {
      table.dropColumn('updated_at')
      table.dropColumn('created_at')
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('teams', table => {
      table.timestamps(true, true)
    })
    .table('matches', table => {
      table.timestamps(true, true)
    })
};
