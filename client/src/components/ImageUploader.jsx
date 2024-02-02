import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import PropTypes from "prop-types";
import exitURL from "/assets/exit.svg";
import axios from "axios";
import { UseUpload } from "../containers/UseUpload";
import { ToastContainer } from "react-toastify";
import { showErrorToast } from "../utils/notification";
import "react-toastify/dist/ReactToastify.css";

const imageSizeLimit = 2 * 1024 * 1024;

const submitImageForm = async (
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
  } = await axios.post("http://localhost:5001/api/upload_image", formData);
  return imageUrl;
};

const ImageUploader = () => {
  const {
    uploadedImage,
    uploadedImageUrl,
    setUploadedImageUrl,
    setIsLoading,
    setUploadedImage,
  } = UseUpload();

  // process the image file
  const onDrop = useCallback(
    async (acceptedFiles) => {
      const imgObject = acceptedFiles[0];
      console.log(imgObject);

      if (imgObject.size <= imageSizeLimit) {
        setIsLoading(true);

        try {
          await submitImageForm(imgObject, imgObject.name);

          const imageUrl = URL.createObjectURL(imgObject);
          setUploadedImageUrl(imageUrl);
          setUploadedImage(imgObject);
        } catch (error) {
          console.log(error);
        }
      } else {
        showErrorToast("Image size should be smaller than 2MB!");
      }
    },
    [setIsLoading, setUploadedImageUrl, setUploadedImage]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
  });

  return (
    <div
      className={`box-border border-gray-400 p-2 rounded-md shadow-custom dark:bg-gray-800 max-w-[700px] min-w-[300px] ${
        uploadedImage ? "w-fit" : "w-full aspect-video"
      }`}
    >
      <ToastContainer />
      {uploadedImage ? (
        <img
          src={uploadedImageUrl}
          alt=""
          className="max-h-[600px] cursor-pointer hover:opacity-65"
        />
      ) : (
        <div
          {...getRootProps()}
          className={`size-full border-2 bg-gray-100 dark:bg-gray-800 hover:opacity-65 border-gray-300 dark:border-gray-500 border-dashed rounded-lg flex flex-col justify-center items-center cursor-pointer ${
            isDragActive ? "active" : ""
          }`}
        >
          <input {...getInputProps()} />
          <img src={exitURL} className="mb-6" />
          <p className="text-[14px] dark:text-gray-300">
            Drag & drop a file or{" "}
            <span className="text-[#3662E3]">browse files</span>
          </p>
          <p className="mt-2 text-[12px] text-[#4D5562] dark:text-gray-300 text-[0.8rem]">
            JPG, PNG or GIF - Max file size 2MB
          </p>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
