const authConfig = require('../config/auth.config');

const basicAuth = (req, res, next) => {
    // Ensure an Authorization header was sent
    if (!req.headers.authorization) {
        res.setHeader('WWW-Authenticate', 'Basic');
        return res.status(401).send('Authentication required.');
    }
    // Decode the base64-encoded string
    const base64Credentials = req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('utf8');
    const [username, password] = credentials.split(':');

    // Replace "admin" and "password" with your actual username and password
    if (username === authConfig.username && password === authConfig.pwd) {
        next();
    } else {
        res.setHeader('WWW-Authenticate', 'Basic');
        res.status(401).send('Access denied. Please provide valid credentials.');
    }
}

module.exports = basicAuth
