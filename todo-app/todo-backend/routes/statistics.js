const express = require('express');
const router = express.Router();
const {getAsync} = require('../redis')

/* GET todos listing. */
router.get('/', async (_, res) => {
    const counter = await getAsync('todos');
    
    if(!counter) return res.send({added_todos: 0});
    console.log(counter)

    res.send({added_todos: counter});
});



module.exports = router;
