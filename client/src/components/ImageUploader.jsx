import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import exitURL from "/assets/exit.svg";
import { UseUpload } from "../containers/UseUpload";
import { ToastContainer } from "react-toastify";
import { showErrorToast } from "../utils/notification";
import "react-toastify/dist/ReactToastify.css";
import { uploadImage } from "../services/upload";

import config from "../utils/config";

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
      // console.log(imgObject);

      if (imgObject.size <= config.IMAGE_SIZE_LIMIT) {
        setIsLoading(true);

        try {
          await uploadImage(imgObject, imgObject.name);

          const imageUrl = URL.createObjectURL(imgObject);
          setUploadedImageUrl(imageUrl);
          setUploadedImage(imgObject);
        } catch (error) {
          console.error(error);
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
      className={`box-border border-gray-400 p-2 rounded-md shadow-custom dark:bg-gray-800 ${
        uploadedImage ? "w-fit" : "max-w-[700px] min-w-[300px] w-full aspect-video"
      }`}
    >
      <ToastContainer />
      {uploadedImage ? (
        <img
          src={uploadedImageUrl}
          alt={uploadImage.name}
          className="max-h-[600px] cursor-pointer"
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
