import UploadContext from "./UploadContext";
import { useState, useEffect, useContext } from "react";

const UploadProvider = (props) => {
  const [lightMode, setLightMode] = useState(true);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("color-theme", lightMode ? "light" : "dark");
    if (lightMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [lightMode]);

  useEffect(() => {
    if (uploadedImage) {
      setIsLoading(false);
    }
  }, [uploadedImage]);

  const handleToggleMode = () => setLightMode(!lightMode);

  const reset = () => {
    setUploadedImage(null);
    uploadedImageUrl("");
  }

  return (
    <UploadContext.Provider
      value={{
        reset,
        lightMode,
        uploadedImage,
        uploadedImageUrl,
        isLoading,
        setLightMode,
        setUploadedImage,
        setUploadedImageUrl,
        setIsLoading,
        handleToggleMode
      }}
      {...props}
    ></UploadContext.Provider>
  );
};

const UseUpload = () => useContext(UploadContext);

export { UploadProvider, UseUpload };
