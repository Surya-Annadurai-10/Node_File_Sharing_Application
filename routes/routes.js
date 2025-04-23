const express = require("express");
const router = express.Router();
const fileControllers = require ("../controllers/controller.js");
const upload = require("../middleware.js");

router.post("/api/files/upload",upload.single("file_path") ,fileControllers.uploadController )
router.post("/api/files/share" , fileControllers.shareController)
router.get("/download/:id" , fileControllers.downloadController)

module.exports = router;