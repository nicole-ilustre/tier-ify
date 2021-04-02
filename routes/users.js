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
          res.render('home', { sorted, products})
        })
      })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/:id', (req, res) => {
  let id = req.params.id
  db.getStudents()
    .then(students => {
      db.getProducts()
        .then(products => {
          let sorted = sortLeaderboard(students)
          res.render('home', { sorted, products, id})
        })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/student/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getProfile(id)
    .then(student => {
      db.getAdjustments(id).then((adjustments) => {
        res.render('profile', {student, adjustments})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })     
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

router.post('/adjustment/:id', (req, res) => {
  const id = Number(req.params.id)
  const {reason, adjustment} = req.body  

  db.addAdjustment({
    "reason": reason,
    "adjustment": Number(adjustment),
    "student_id": id
  })
  .then((adjustment_id) => {
    db.getAdjustment(adjustment_id)
    .then((adjustment) =>{
      db.getPoints(id)
      .then((points) => {
        db.updatePoints(adjustment, points.points)
        
        .then(() => {
          res.redirect('/student/' + id)
        })
      })
    })
  })
})

router.post('/purchase/:id', (req, res) => {
  const product_id = req.query.product_id
  const student_id = req.query.student_id
  const id = Number(req.params.id)
  const {reason, adjustment} = req.body  

  db.addAdjustment({
    "reason": reason,
    "adjustment": Number(adjustment),
    "student_id": id
  })
  .then((adjustment_id) => {
    db.getAdjustment(adjustment_id)
    .then((adjustment) =>{
      db.getPoints(id)
      .then((points) => {
        console.log(points)
        console.log(typeof points)
        db.updatePoints(adjustment, points.points)
        
        .then(() => {
          db.getProduct(product_id)
            .then(product => {
              db.getProfile(student_id)
                .then(student => {
                  res.render('checkout', { student, product })
                })
            })
        })
      })
    })
  })
})

module.exports = router