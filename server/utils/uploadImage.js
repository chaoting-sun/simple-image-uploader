const cloudinary = require("cloudinary").v2;
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImage = async (imageFile, saveName, saveFolder) => {
  const base64Image = imageFile.buffer.toString("base64");
  const dataUri = `data:${imageFile.mimetype};base64,${base64Image}`;

  const res = await cloudinary.uploader.upload(dataUri, {
    folder: saveFolder,
    public_id: saveName
  });
  return res;
};

module.exports = uploadImage;
