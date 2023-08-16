const express = require('express');
const bodyparser = require('body-parser');
const app = express();

const {PORT} = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

const SetUpAndStartServer = () => {

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));

    app.use('/api', apiRoutes);

    app.listen(PORT, () => {
        console.log(`Port started at ${PORT}`);
        if(process.env.DB_SYNC){
            db.sequelize.sync({alert: true});
        }
    });
}

SetUpAndStartServer();