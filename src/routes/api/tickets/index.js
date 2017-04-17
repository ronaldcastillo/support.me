const { Router } = require('express')
const router = Router()

const index = (req, res, next) => {
  res.json({
    summary: {
      total: 1
    },
    data: [
      {
        id: 1,
        title: 'My internet connection is not working',
        content: 'Guys, I need help, my internet connection is not working',
        created_by: {
          id: 1,
          username: 'john@example.com',
          first_name: 'John',
          last_name: 'Doe'
        }
      }
    ]
  })
}

router.get('/', index)

module.exports = router
