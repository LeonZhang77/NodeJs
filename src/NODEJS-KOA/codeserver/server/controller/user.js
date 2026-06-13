const User = require('../model/user')
const listAll = async(ctx) => {
    try {
        const users = await User.findAll()
        ctx.body = users
    } catch (error) {
        ctx.status = 500
        ctx.body = { error: error.message }
    }
}

const create = async(ctx) => {
    
    const params = ctx.request.body
    console.log('123', params)
    try {
        const user = await User.create(params)
        ctx.status = 201
        ctx.body = user
    } catch (error) {
        ctx.status = 500
        ctx.body = { error: error.message }
    }
}

module.exports = {
    listAll,
    create,
}
