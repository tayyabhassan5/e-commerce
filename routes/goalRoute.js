const express = require('express')
const { getGoals,
    UpdateGoals,
    DeleteGoals,
    PutGoals,
} = require('../controllers/goalControllers')

const router = express.Router()

router.get('/', getGoals)

router.post('/', PutGoals)

router.put('/:id', UpdateGoals)

router.delete('/:id', DeleteGoals)

module.exports = router