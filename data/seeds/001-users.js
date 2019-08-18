exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "John",
          password: "pa55word",
          email: "John@email.com"
        },
        {
          username: "Caleb",
          password: "passw0rRrRd",
          email: "Caleb@email.com"
        },
        {
          username: "Alexis",
          password: "ItsABigSecret",
          email: "Alexis@email.com"
        },
        {
          username: "Collin",
          password: "ItsABigSecret",
          email: "collin@email.com"
        },
        {
          username: "Gerardo",
          password: "whatsMYpassword",
          email: "Gerardo@email.com"
        },
        {
          username: "Cody",
          password: "YoullNEVERGUUUUESSS",
          email: "Cody@email.com"
        }
      ]);
    });
};
