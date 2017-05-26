const Task = require('../../../models/task')

function getById (req, res) {
  const { id } = req.params

  Task
    .findById(id)
    .then(task => res.json(task))
    .catch(err => { throw err })
}

module.exports = getById
