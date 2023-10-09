const router = require("express").Router();
const { uploadFile, getFile } = require("../src/contoller");
const { uploader } = require("./minioClient");

router.post("/upload", uploader.single("file"), uploadFile);
router.get("/:id", getFile);

module.exports = router;
