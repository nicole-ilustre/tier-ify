const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getStudents()
    .then(students => {
      db.getProducts()
      .then(products => {
        console.log({students, products})
      res.render('home', {students, products})
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
    console.log({student})
    res.render('STUDENT PROFILE', {student})
  })
})

router.get('/product/:id', (req, res) => {
  const id = req.params.id
  db.getProduct(id)
  .then(product => {
    console.log({product})
    res.render('PRODUCT INFO', {product})
  })
})

router.get('/checkout/:id', (req, res) => {
  const id = req.params.id
  db.getProduct(id)
  .then(product => {
    console.log({product})
    res.render('CHECKOUT INFO', {product})
  })
})



module.exports = router