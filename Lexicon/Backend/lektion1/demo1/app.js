const express = require('express');
const app = express();

const port = 9999;
const serverURI = 'http://localhost:' + port;




app.listen(port, () => console.log('Webserver: ' + serverURI));