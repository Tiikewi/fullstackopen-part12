const express = require('express');
const { Todo } = require('../mongo')
const router = express.Router();

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })
  res.send(todo);
});



/* DELETE todo. */
router.delete('/', async (req, res) => {
  await req.todo.delete()  
  res.sendStatus(200);
});

/* GET todo. */
router.get('/:id', async (req, res) => {
  const { id } = req.params
  const todo = await Todo.findById(id)
  if (!todo) return res.sendStatus(404)

  res.send(todo)

});

/* PUT todo. */
router.put('/', async (req, res) => {
  const { id } = req.params
  const todo = await Todo.updateOne(id, req.body);
  if (!todo) return res.sendStatus(404);

  res.sendStatus(202)
});


module.exports = router;
