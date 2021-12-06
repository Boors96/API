const express = require('express');
const bodyParser = require('body-parser');

const appRouts = require('../config/app-rout/rout');
const appHeaders = require('../config/app-header/header');
const port = require('../config/app-port/port');

const dbController = require('../config/app-db/db-controller');
const db_config = require('../config/app-db/db.config');
// create express object
const app = express();

// configure app header
app.use(appHeaders.headerConfig);

// add body-parser
app.use(bodyParser.json());

//establish db connection
dbController.connect();

// configure async
// db_config.database.sync({ force: true });

// send express object to routs configuration
appRouts.routsConfig(app);


module.exports = app.listen(port.PORT, console.log("Server running on port " + port.PORT)) ;
