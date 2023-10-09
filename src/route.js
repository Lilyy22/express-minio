const router = require("express").Router();
const { uploadFile, getFile } = require("../src/contoller");
const { uploader } = require("./minioClient");

router.post("/upload", uploader.single("file"), uploadFile);
router.get("/:file_name", getFile);

module.exports = router;
