const { minioClient } = require("./minioClient");

const upload = async (file) => {
  try {
    const newObj = await minioClient.fPutObject(
      "profile-pictures",
      file.originalname,
      file.path
    );
    return newObj;
  } catch (error) {
    throw error;
  }
};

const get = async (file_name) => {
  try {
    const Obj = await minioClient.fGetObject(
      "profile-pictures",
      file_name,
      `D:Multer/${file_name}`
    );
    return "Successfully downloaded file to path.";
  } catch (error) {
    throw error;
  }
};

module.exports = { get, upload };
