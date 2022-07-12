/* db conection */
const mongoose = require('mongoose');

const dbConection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN, {});
        console.log('DB Conectada');
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConection;