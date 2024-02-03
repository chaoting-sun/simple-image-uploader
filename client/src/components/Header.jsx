import logoSmallURL from "/assets/logo-small.svg";
import moonURL from "/assets/Moon_fill.svg";
import sunURL from "/assets/Sun_fill.svg";
import { UseUpload } from "../containers/UseUpload";

const Header = () => {
  const { reset, lightMode, handleToggleMode } = UseUpload();

  return (
    <div className="absolute top-0 h-16 w-[100%] flex justify-between items-center bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="flex flex-row gap-5 ml-[6%]">
        <img src={logoSmallURL} className="h-8 cursor-pointer" onClick={reset} />
        <h1 className={`font-bold text-[1.2rem] select-none ${lightMode ? "text-black" : "text-white"}`}>ImageUpload</h1>
      </div>
      <button
        onClick={handleToggleMode}
        className="box-border border border-gray-200 dark:border-gray-600 p-2 rounded-md mr-[6%] dark:bg-gray-700 hover:border-blue-500 dark:hover:border-blue-500 active:ring-2 dark:active:ring-2"
      >
        {lightMode ? <img src={moonURL} /> : <img src={sunURL} />}
      </button>
    </div>
  );
};

export default Header;
