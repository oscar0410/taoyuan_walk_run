const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

const indexRouter = require('./routes/index');
const userWalkLogRouter = require('./routes/userWalkLog.api');
const routeRouter = require('./routes/route.api');
const visitorRouter = require('./routes/visitor.api');
const infoRouter = require('./routes/info.api');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/userWalk', userWalkLogRouter);
app.use('/api/route', routeRouter);
app.use('/api/visitor', visitorRouter);
app.use('/api/info', infoRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

module.exports = app;
