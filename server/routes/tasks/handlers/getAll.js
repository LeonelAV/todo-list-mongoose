const Task = require('../../../models/task')


function getAll(req, res) {
  Task.find()
    .then(tasks => {
      res.render('tasks', { tasks })
    })
}

module.exports = getAll
