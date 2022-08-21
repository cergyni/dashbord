require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const moduls = require('./models/models');
const cors = require('cors');
const router = require('./routes/index')
//const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors())
app.use(express.json())
app.use('/api', router)


//app.use(errorHandler)

// app.get('/', (req, res) =>{
//     res.status(200).json({message: 'Working good!!!!!!!'})
// })

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server stared on ${PORT}`));

    } catch (e) {
        console.log(e);
    }
}

start();
