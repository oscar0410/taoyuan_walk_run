const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/files/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

// Create the multer instance
const uploadConfig = multer({storage: storage});

module.exports = uploadConfig;
