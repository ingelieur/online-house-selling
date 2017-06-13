const router = require('express').Router()
const House = require('../controllers/house')

router.get('/', House.showAll)
router.post('/', House.create)
router.get('/:id', House.showOne)
router.put('/:id', House.update)
router.delete('/:id', House.destroy)

module.exports = router
