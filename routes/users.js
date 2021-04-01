const express = require('express')
const db = require('../db')
const {sortLeaderboard} = require('../lib')
const router = express.Router()

router.get('/', (req, res) => {
  db.getStudents()
    .then(students => {
      db.getProducts()
        .then(products => {
          let sorted = sortLeaderboard(students)
          console.log("Students: ", students)
          console.log("Sorted: ",sorted)
          res.render('home', { sorted, products })
        })
      })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/student/:id', (req, res) => {
  const id = req.params.id
  db.getProfile(id)
    .then(student => {
      res.render('STUDENT PROFILE', { student })
    })
})

router.get('/product/:id', (req, res) => {
  const id = req.params.id
  db.getProduct(id)
    .then(product => {
      console.log({ product })
      res.render('PRODUCT INFO', { product })
    })
})

router.get('/query', (req, res) => {
  const product_id = req.query.product_id
  const student_id = req.query.student_id
  db.getProduct(product_id)
    .then(product => {
      db.getProfile(student_id)
        .then(student => {
        })
      res.render('CHECKOUT INFO', { student, product })
    })
})

// router.post('') 

module.exports = router