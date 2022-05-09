const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const db = `mongodb+srv://ideakartuser:ideakart_123@cluster0.lc5lv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
// const db = 'mongodb://localhost:27017/levitest'

module.exports = () => mongoose.connect(db)