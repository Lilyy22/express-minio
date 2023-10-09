const { minioClient } = require("./minioClient");

const metaData = {
  "Content-Type": "application/octet-stream",
  "X-Amz-Meta-Testing": 1234,
  example: 5678,
};

const upload = async (file) => {
  try {
    const newObj = await minioClient.fPutObject(
      "profile-pictures",
      file.originalname,
      file.path,
      metaData
    );
    return newObj;
  } catch (error) {
    throw error;
  }
};

const get = async (file) => {
  // try {
  //   const newObj = minio.putObject({});
  //   return newObj;
  // } catch (error) {
  //   throw error;
  // }
  return "hello there";
};

module.exports = { get, upload };
