
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {product_id: 1, product_name: 'mindfulness'},
        {product_id: 2, product_name: 'interview'},
        {product_id: 3, product_name: 'printer'},
        {product_id: 4, product_name: 'dinner'},
        {product_id: 5, product_name: 'solotime'}
      ]);
    });
};
