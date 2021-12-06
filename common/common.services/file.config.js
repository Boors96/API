
const _ = require('../common.env/env');
const { 
    v4: uuidv4
  } = require('uuid');

const multer = require('multer');
const { object } = require('underscore');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, _.UPL_DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join(_.SAMPLS.SCOR);
        cb(null, uuidv4() +  _.SAMPLS.SCOR + fileName)
    }
});

exports.uploade = 
     multer({
        storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "application/pdf") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
    });

exports.setFilePath = (req) => {
    return {file_path: req.server_url + '/public/uploads' + req.file.filename, order_id: getOrderId(req)};
};

exports.getUrl = (req) => {
    return req.protocol + '://' + req.get('host');
};

const getOrderId = (req) => {
    return req.headers.order_id;
}

