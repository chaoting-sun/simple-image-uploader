import { UseUpload } from "../containers/UseUpload";

// ref: https://5balloons.info/how-to-create-custom-css-animations-in-tailwindcss

const Loading = () => {
  const { uploadedImage } = UseUpload();
  
  return (
    <div
      className={`flex flex-col justify-center items-center gap-3 box-border border-gray-400 rounded-md shadow-custom dark:bg-gray-800 h-32 max-w-[700px] min-w-[300px] ${
        uploadedImage ? "w-fit" : "w-full aspect-video"
      }`}
    >
      <p className="mt-2 text-[#4D5562] text-[1rem] dark:text-gray-300 text-[0.8rem]">
        <b>Uploading</b>, please wait...
      </p>
      <div className="relative h-2 w-[70%] bg-gray-200 rounded-sm overflow-hidden">
        <div
          id="progress"
          className="absolute h-full w-1/6 rounded-full bg-blue-500 animate-loading"
        ></div>
      </div>
    </div>
  );
};

export default Loading;
