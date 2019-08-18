exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "John",
          password: "password",
          email: "email1@email.com"
        },
        {
          username: "Caleb",
          password: "password",
          email: "email2@email.com"
        },
        {
          username: "Alexis",
          password: "password",
          email: "email3@email.com"
        }
      ]);
    });
};
