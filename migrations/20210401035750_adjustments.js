
exports.up = function(knex) {
    return knex.schema.createTable('adjustments', (table) => {
        table.increments('adjustment_id').primary()
        table.string('reason')
        table.integer('adjustment')
        table.integer('student_id')
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('adjustments')
};
