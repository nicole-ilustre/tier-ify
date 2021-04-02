const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)
var Handlebars = require('handlebars');

const sortLeaderboard = (students) => {
  return students.sort((studOne, studTwo) => {
    return studOne.points < studTwo.points ? 1 : studOne.points > studTwo.points ? -1 : 0;
  })
}

Handlebars.registerHelper('num', (value, options) => {
  if( typeof value === 'number' ) {
    return options.fn(this);
  }
})

Handlebars.registerHelper("rank", function (value, options) {
  return parseInt(value) + 1;
});

module.exports = {
  sortLeaderboard
}