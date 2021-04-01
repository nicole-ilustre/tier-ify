const config = require('./knexfile')[environment]
const connection = require('knex')(config)

const sortLeaderboard = (students) => {
  return sorted =  students.sort((studOne, studTwo) => {
    return studOne > studTwo ? 1 : studOne < studTwo ? -1 : 0;
  })
}
