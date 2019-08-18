exports.up = function(knex) {
  return knex.schema.createTable("volunteers", tbl => {
    tbl.increments();
    tbl.integer("event_id");
    tbl
      .foreign("event_id")
      .references("id")
      .inTable("events");
    tbl.integer("user_id");
    tbl
      .foreign("user_id")
      .references("id")
      .inTable("users");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("volunteers");
};
