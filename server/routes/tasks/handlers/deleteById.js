const Task = require('../../../models/task')

function deleteById (req, res) {
  const { id } = req.params

  Task
    .findByIdAndRemove(id)
    .then(msg => res.json(msg))
    .catch(err => res.json(err))
}

module.exports = deleteById
