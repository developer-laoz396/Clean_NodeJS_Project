const mongoose = require('mongoose');
require('dotenv').config();

const db_path = process.env.DB_CONN;

class DB_Connetion {
    async connect() {
        mongoose.connect(db_path, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, error => {
            if (!error) {
                console.log('Connection successfully');
            }
            else {
                console.log(error);
            }
        });
    }
}

module.exports = DB_Connetion;
