const sequlize = require('../config/db')
const Sequelize = require('sequelize')
const mment = require('moment')

const user = sequlize.define(
    'user', 
    {
        id: {
            type: Sequelize.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING(255),
            allowNull: false,
        },
        age: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
        },
        sexlabel: Sequelize.STRING,
        birth: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
            get() {
                return mment(this.getDataValue('birth')).format('YYYY-MM-DD HH:mm')
            },
        },
        createAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
            get() {                
                return mment(this.getDataValue('createAt')).format('YYYY-MM-DD HH:mm')
            },
        },
        updateAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
            get() {
                return mment(this.getDataValue('updateAt')).format('YYYY-MM-DD HH:mm')
            },
        },
        address: Sequelize.STRING,
    },
    {
        freezeTableName: true,
    }
)

module.exports = user
