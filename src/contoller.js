const { upload, get } = require("../src/services");

const uploadFile = async (req, res) => {
  try {
    const newObj = await upload(req.file);
    res.send(newObj);
  } catch (error) {
    throw error;
  }
};

const getFile = async (req, res) => {
  try {
    const Obj = await get(req.body);
    res.send(Obj);
  } catch (error) {
    throw error;
  }
};

module.exports = { getFile, uploadFile };
