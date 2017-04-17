const { Router } = require('express')
const router = Router()

router.get('/status', (req, res, next) => {
  res.json({
    status: 'ok'
  })
})

router.use('/tickets', require('./tickets'))

module.exports = router
