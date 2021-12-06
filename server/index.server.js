const express = require('express');
const bodyParser = require('body-parser');

const https = require('https');
const http = require('http');

const fs = require('fs');

const cors = require('cors');

const _ = require('../common/common.env/env');

const appRouts = require('../config/app-rout/rout');
const appHeaders = require('../config/app-header/header');
const port = require('../config/app-port/port');

const dbController = require('../config/app-db/db-controller');
const db_config = require('../config/app-db/db.config');
// create express object
const app = express();

app.use(cors());

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

const httpServer = http.createServer(app);
const httpsServer = https.createServer({
  key: fs.readFileSync(_.CA_PRAIVATE_KEY),
  cert: fs.readFileSync(_.CA_FULL_CHAIN),
}, app);

module.exports = httpsServer.listen(port.PORT, console.log("Server running on port " + port.PORT)) ;
