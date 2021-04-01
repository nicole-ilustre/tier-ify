
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('adjustments').del()
    .then(function () {
      // Inserts seed entries
      return knex('adjustments').insert([
        {adjustment_id: 1, reason: 'purchase', adjustment: 0, student_id: 0},
      ]);
    });
};
