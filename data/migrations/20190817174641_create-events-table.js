exports.up = function(knex) {
  return knex.schema.createTable("events", tbl => {
    tbl.increments();
    tbl.string("name", 255).notNullable();
    tbl.integer("owner_id");
    tbl
      .foreign("owner_id")
      .references("id")
      .inTable("users");
    tbl.string("location", 255).notNullable();
    tbl.date("event_date").notNullable();
    tbl.string("description", 255).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("events");
};
