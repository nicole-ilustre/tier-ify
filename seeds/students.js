
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {id: 1, name: 'Nicole', points: 0},
        {id: 2, name: 'Sam', points: 0},
        {id: 3, name: 'Caleb', points: 0},
        {id: 4, name: 'Dainy', points: 0},
        {id: 5, name: 'Aaron', points: 0},
        {id: 6, name: 'Nathan', points: 0},
        {id: 7, name: 'Kent', points: 0},
        {id: 8, name: 'Ysabel', points: 0},
        {id: 9, name: 'Jatin', points: 0},
        {id: 10, name: 'JV', points: 0},
        {id: 11, name: 'John', points: 0},
        {id: 12, name: 'Sarah', points: 0}
      ]);
    });
};
