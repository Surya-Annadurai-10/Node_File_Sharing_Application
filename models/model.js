const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
  fieldname: {
    type: String,
    required: true,
  },
  originalname: {
    type: String,
    required: true,
  },
  encoding: {
    type: String,
    required: true,
  },
  mimetype: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  filename: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
 uploadedAt : {
    type : Date,
  default: Date.now()
 }
});

const FileModel = mongoose.model('File', FileSchema);

module.exports = FileModel;


// {
//     fieldname: 'data_file',
//     originalname: 'problem 7.png',
//     encoding: '7bit',
//     mimetype: 'image/png',
//     destination: 'file_uploads/',
//     filename: '7357f5b114468419b13ef6c6d44c8306',
//     path: 'file_uploads\\7357f5b114468419b13ef6c6d44c8306',
//     size: 52072
//   }