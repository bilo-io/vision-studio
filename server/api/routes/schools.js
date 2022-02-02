// const explore = require('../controllers/schools/explore')
const courses = require('../controllers/schools/courses')
// const evaluations = require('../controllers/schools/evaluations')

module.exports = (app) => {
    // Evaluations
    // app.post('/api/schools/evaluations', evaluations.create)
    // app.get('/api/schools/evaluations', evaluations.getAll)
    // app.get('/api/schools/evaluations/:id', evaluations.getById)
    // app.put('/api/schools/evaluations/:id', evaluations.update)
    // app.delete('/api/schools/evaluations/:id', evaluations.destroy)

    // Courses
    app.post('/api/schools/courses', courses.create)
    app.get('/api/schools/courses', courses.getAll)
    app.get('/api/schools/courses/:id', courses.getById)
    app.put('/api/schools/courses/:id', courses.update)
    app.delete('/api/schools/courses/:id', courses.destroy)

    // VISION: API.ROUTES
}
