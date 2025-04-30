require('dotenv').config();
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const cors = require('cors');

// Initializacion
const app = express();
app.disable('x-powered-by');
const config = require('./webpack.config.js');
const compiler = webpack(config);

// settings
app.set('views', path.join(__dirname, 'src'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('port', process.env.PORT);

// Middleware
app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
)
    .use(express.urlencoded({ extended: false }))
    .use(express.json())
    .use(cors());

// Static Files
app.use('/src', express.static(path.join(__dirname, 'src')))
    .use('/icons', express.static(path.join(__dirname, 'src/assets/icons')))
    .use('/images', express.static(path.join(__dirname, 'src/assets/images')));

// Server start
app.listen(app.get('port'), () => {
    console.log('Server running on port ', app.get('port'));
});
