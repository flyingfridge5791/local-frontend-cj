const app = require('./app');
const mongoose = require('mongoose');

const port = 9999;

const serverURI = 'http://localhost:' + port;
const mongoURI = 'mongodb+srv://christopher:c7do2po9@illegalclusterexplosive.jhuzp.mongodb.net/REST?retryWrites=true&w=majority'

app.listen(port, () => console.log('Webserver:' + serverURI));

mongoose
.set('useCreateIndex', true)
.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () => console.log('Connected to DB'));




