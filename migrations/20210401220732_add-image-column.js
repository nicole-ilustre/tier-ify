
exports.up = function(knex) {
    return knex.schema.table('products', (table) => {
        table.string('image')
      })
};

exports.down = function(knex) {
    return knex.schema.dropColumn('image')
};
