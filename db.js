const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getStudents,
  getProducts,
  getProfile,
  getProduct,
  addProduct,
  makeAdjustment,
}

//to display on leaderboard
function getStudents (db = connection) {
  return db('students').select()
}

//to display on store homepage
function getProducts (db = connection) {
  return db('products').select()
}

//when a user 'logs in' when purchasing
function getProfile (id, db = connection) {
  return db('students')
  .where('id', id)
  .select()
}

//when a user chooses a product to purchase
function getProduct (id, db = connection) {
  return db('products')
  .where('product_id', id)
  .select()
}

//add product
function addProduct (name, price, db = database) {
  return db('todos').insert({
    product_name: name,
    price: price
  })
}

//make calculations to student's points when making puuchases
function makeAdjustment (id, db = connection) {
  return db('students')
  .join('adjustments', 'adjustments.student_id', 'student.id')
  .where('students.id', id)
  .select('*', 'student.id as id', 'adjustments.id as id')
  .first()
}