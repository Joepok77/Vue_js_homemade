const { DataTypes, Model } = require('sequelize')
const sequelizeClient = require('../connect')
const bcrypt = require('bcrypt')
class User extends Model {
}
User.init({
    firstName : {
        type: DataTypes.STRING,
        allowNull : false,
        set(value) {
            const name = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
            this.setDataValue('firstName', name)
        }
    },
    lastName : {
        type: DataTypes.STRING,
        allowNull : false,
        set(value) {
            const name = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
            this.setDataValue('lastName', name)
        }
    },
    email : {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true


    },
    password : {
        type: DataTypes.TEXT,
        allowNull: false,
        set(value){
            this.setDataValue('password', bcrypt.hashSync(value, 10))
        }
    },
    role : {
        type: DataTypes.ENUM(['admin', 'user']),
        defaultValue: 'user',
        allowNull: false
    }
}, {
    modelName: 'User',
    sequelize: sequelizeClient
})

// console.log(User === sequelizeClient.models.User)
// //  appliquez le tout à la bdd
// async function synchroWithBd(){
//     await User.sync({alter: true})
// }
// synchroWithBd()

module.exports = User