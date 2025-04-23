const path = require("path");
const FileModel = require("../models/model");
const filePath = path.join(__dirname);

const uploadController = async (req, res) => {
  console.log(req.file, "file"); // {
  //     fieldname: 'data_file',
  //     originalname: 'problem 7.png',
  //     encoding: '7bit',
  //     mimetype: 'image/png',
  //     destination: 'file_uploads/',
  //     filename: '7357f5b114468419b13ef6c6d44c8306',
  //     path: 'file_uploads\\7357f5b114468419b13ef6c6d44c8306',
  //     size: 52072
  //   }

  if (req.file) {
    await FileModel.create(req.file);
  }

  res.status(200).json({
    message: "file Uploaded Successfully",
    data: req.file,
  });
};

const shareController = async (req, res) => {
  const fileID = req.body.id;
  console.log(fileID, "fileID");

  const file = await FileModel.findById(fileID);

  if (!file) {
    res.status(400).json({
      message: "file not found",
    });
  }

  res.status(200).json({
    message: "shared Successfully",
    link: `/download/${file._id}`,
  });
};

const downloadController = async (req, res) => {
  const fileId = req.params.id;
  console.log(fileId, "fileid");

  try {
    const file = await FileModel.findById(fileId);
    console.log(file, "file");
    res.download(file.path,file.originalname)
  } catch (error) {
    res.status(400).json({
      message : "invalid id"
    })
  }
};

module.exports = { uploadController, shareController, downloadController };
