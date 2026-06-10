const router = require('koa-router')()
const User = require('../controller/user')
router.prefix('/users')

router.get('/', User.listAll)

router.post('/addUser', User.create)

module.exports = router
