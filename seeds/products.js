
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {product_id: 1, product_name: 'One-on-One mindfulness with John', price: 5, image: '5-EDA.jpg'},
        {product_id: 2, product_name: '10min interview practice with Sarah', price: 5, image: '10-EDA.jpg'},
        {product_id: 3, product_name: '1 print with JVs printer', price: 15, image: '15-EDA.jpg'},
        {product_id: 4, product_name: 'Dinner date with JV', price: 25, image: '25-EDA.jpg'},
        {product_id: 5, product_name: '15min solo time', price: 50, image: '50-EDA.jpg'},
        {product_id: 6, product_name: 'Mystery Item!', price: 100, image: '100-EDA.jpg'}
      ]);
    });
};
