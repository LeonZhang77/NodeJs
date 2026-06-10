const router = require('koa-router')()
const User = require('../controller/user')
router.prefix('/users')

router.get('/', User.listAll)

router.get('/add', User.create)

module.exports = router
