const router = require('express').Router()
const { MessageController } = require('../controllers/MessageController')

router.get('/', MessageController.getAll)
router.post('/', MessageController.createMessage)
router.get('/chat', MessageController.getConvertation)


module.exports = router