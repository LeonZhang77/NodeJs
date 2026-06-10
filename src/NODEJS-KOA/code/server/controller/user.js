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
    try {
        const user = await User.create({ 
            name:"张三", 
            age: 18, 
            sexlabel: "男", 
            birth: '1985-3-15', 
            address: "张家界" })
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
