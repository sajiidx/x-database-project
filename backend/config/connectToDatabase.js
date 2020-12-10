const mongoose = require('mongoose')
const config = require('config')

const connectToDatabase = async () =>{
    try{
        await mongoose.connect(
            config.get('mongoURL'),
            {
                useCreateIndex: true,
                useFindAndModify: true,
                useUnifiedTopology: true,
                useNewUrlParser: true,
            }
        )
        console.log('MongoDB is Connected!')
    } catch(error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectToDatabase;