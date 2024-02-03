import axios from "axios";
import config from "../utils/config";

const uploadImage = async (
  imgObject,
  saveName="text",
  saveFolder = "image-uploader"
) => {
  const formData = new FormData();
  formData.append("file", imgObject);
  formData.append("saveName", saveName);
  formData.append("saveFolder", saveFolder);
  const {
    data: { imageUrl },
  } = await axios.post(`${config.BASE_URL}/upload_image`, formData);
  return imageUrl;
};

export { uploadImage };