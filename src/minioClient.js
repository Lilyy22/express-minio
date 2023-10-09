const minio = require("minio");
const multer = require("multer");

const minioClient = new minio.Client({
  endPoint: process.env.MINIO_ENDPOINT,
  port: 9000,
  useSSL: false,
  accessKey: process.env.MINIO_ACCESSKEY,
  secretKey: process.env.MINIO_SECRETKEY,
});

const minioStorage = multer.diskStorage({
  destination: "D:Multer",
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const uploader = multer({ storage: minioStorage });

module.exports = { minioClient, uploader };
