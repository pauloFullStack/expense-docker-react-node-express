const mongoose = require('mongoose');

const connectDB = async () => {

    //  Remove aviso de versão mongoose
    mongoose.set('strictQuery', false);

    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    try {

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);

    } catch (error) {

        console.error(`Error: ${err.message}`.red);
        process.exit(1);
    }
}


module.exports = connectDB;