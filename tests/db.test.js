const 
const testEnv = require('./test-environment')
const db = require('../db')

let testDb = db

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test('getUsers gets all users', () => {
  const expected = 12
  return db.getStudents(testDb)
    .then(students => {
      console.log(testDb)
      console.log(students)
      const actual = students.length
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})

// test('getUser gets a single user', () => {
//   const expected = 'test user 1'
//   return db.getUser(99901, testDb)
//     .then(user => {
//       const actual = user.name
//       expect(actual).toBe(expected)
//     })
//     .catch(err => expect(err).toBeNull())
// })

