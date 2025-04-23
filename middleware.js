const multer = require("multer");
const path = require("path");
const {v4 : uuuidv4} = require("uuid")
const filePath = path.join(__dirname , "file_uploads");

const storage  = multer.diskStorage({
    destination : filePath,
    filename : function (req , file , cb){
        const fileExtension = path.extname(file.originalname);
        const filenames = uuuidv4() + fileExtension;
        cb(null , filenames)
    }
});


const upload = multer({
    storage : storage
})

module.exports = upload