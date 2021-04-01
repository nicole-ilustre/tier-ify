
exports.up = function(knex) {
    return knex.schema.createTable('products', (table) => {
        table.increments('product_id').primary()
        table.string('product_name')
        table.integer('price')
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('products')
};
