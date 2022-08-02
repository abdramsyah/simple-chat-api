const router = require('express').Router()

const user = require('./userRoute')
const message = require('./messageRoute')

router.get('/', (req, res) => {
  res.send(" >>> BE DASBOARD RUN <<< ")
})

router.use('/user', user)
router.use('/message', message)


module.exports = router