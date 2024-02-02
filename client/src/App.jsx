import { useCallback, useEffect, useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import copy from "copy-to-clipboard";

import Button from "./components/Button";
import Header from "./components/Header";
import ImageUploader from "./components/ImageUploader";
import Loading from "./components/Loading";

import downloadURL from "/assets/download.svg";
import linkURL from "/assets/Link.svg";

import { showSuccessToast, showErrorToast } from "./utils/notification";
import { UseUpload } from "./containers/UseUpload";

function App() {
  const {
    isLoading,
    lightMode,
    uploadedImage,
    uploadedImageUrl,
    setLightMode,
  } = UseUpload();

  const handleToggleMode = () => {
    setLightMode(!lightMode);
  };

  const copyImageLink = () => {
    const isCopy = copy(uploadedImageUrl);
    if (isCopy) {
      showSuccessToast("Copied to Clip board");
    } else {
      showErrorToast("Copy Failed");
    }
  };

  const handleDownload = () => {
    if (uploadedImage) {
      const downloadLink = document.createElement("a");
      downloadLink.href = uploadedImageUrl;
      downloadLink.download = uploadedImage.name;

      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      // URL.revokeObjectURL(imageUrl);
    }
  };

  return (
    <>
      <div className="relative size-full flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900">
        <ToastContainer />
        <Header lightMode={lightMode} handleToggleMode={handleToggleMode} />

        {isLoading ? <Loading /> : <ImageUploader />}

        {uploadedImage && (
          <div className="flex flex-center gap-3 mt-8">
            <Button
              iconURL={linkURL}
              text="Share"
              handleOnClick={copyImageLink}
            />
            <Button
              iconURL={downloadURL}
              text="Download"
              handleOnClick={handleDownload}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
