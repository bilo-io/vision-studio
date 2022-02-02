const courses = require('../../../mock/schools/courses').map((course, id) => ({ ...course, id }))
const rest = require('../../../util/rest')

module.exports = {
    getAll: (req, res) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        res.status(200).send(courses)
    },
    getById: (req, res) => {
        const id = req.params.id
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

        const resource = rest.accessMember(courses, Number(id))
        const notFound = resource === undefined
        const notFoundResponse = { error: 'Resource Not Found: ' + req.url }
        res.status(notFound ? 404 : 200).send(notFound ? notFoundResponse : resource)
    },
    create: (req, res) => {
        const body = req.body
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        res.status(201).send(rest.createMember(courses, body).slice().pop())
    },
    update: (req, res) => {
        const id = req.params.id
        const body = req.body
        const newMember = rest.updateMember(courses, Number(id), body)
        const notFound = newMember === undefined
        const notFoundResponse = { error: 'Resource Not Found: ' + req.url }
        res.status(notFound ? 404 : 202).send(notFound ? notFoundResponse : newMember)
    },
    destroy: (req, res) => {
        const id = req.params.id
        rest.deleteMember(courses, id)
        res.status(200).send()
    }
}
