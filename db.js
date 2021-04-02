const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getStudents,
  getProducts,
  getProfile,
  getProduct,
  addProduct,
  getAdjustments,
  updatePoints,
  addAdjustment,
  getPoints,
  getAdjustment
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
  .first()
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
function getAdjustments (id, db = connection) {
  return db('adjustments')
    .join('students', 'students.id', 'adjustments.student_id')
    .where('students.id', id)
    .select('*', 'students.id as student_id')
}

function updatePoints (adjustment, points, db = connection) {
  return db('students')
  .where('id', adjustment.student_id)
  .update({'points': Number(points) + adjustment.adjustment})
}

function getPoints (id, db=connection) {
  return db('students')
    .where('id', id)
    .select('points')
    .first()
}



function addAdjustment (adjustment, db = connection) {
  return db('adjustments')
  .insert(adjustment)
}

function getAdjustment(id, db = connection) {
  return db('adjustments')
    .where('adjustment_id', id)//student_id?
    .select()
    .first()
}