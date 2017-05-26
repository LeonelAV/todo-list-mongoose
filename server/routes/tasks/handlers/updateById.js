const Task = require('../../../models/task')
const debug = require('debug')('task')

function updateById(req, res) {

  const { id } = req.params
  const { title, completed, modifiedAt } = req.body
  const update = {}

  if (title) update.title = title
  if (modifiedAt) update.modifiedAt = +new Date()
  if (completed) update.completed = completed
  

  debug(`hey Leonel the task with id ${id} was updated sucessfully at ${modifiedAt}`)
  Task.findByIdAndUpdate(id, update)
      .then(msg => {
        res.json(msg)
       })
      .catch(err => {
        res.json(err)
      })
}

module.exports = updateById
