import PropTypes from "prop-types";
import logoURL from "/assets/logo.svg";
import moonURL from "/assets/Moon_fill.svg";
import sunURL from "/assets/Sun_fill.svg";

const Header = ({ lightMode, handleToggleMode }) => {
  return (
    <div className="absolute top-0 h-16 w-[100%] flex justify-between items-center bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <img src={logoURL} className="h-8 ml-[6%]" />
      <button
        onClick={handleToggleMode}
        className="box-border border border-gray-200 dark:border-gray-600 p-2 rounded-md mr-[6%] dark:bg-gray-700 hover:border-blue-500 dark:hover:border-blue-500 active:ring-2 dark:active:ring-2"
      >
        {lightMode ? <img src={moonURL} /> : <img src={sunURL} />}
      </button>
    </div>
  );
};

Header.propTypes = {
  lightMode: PropTypes.bool.isRequired,
  handleToggleMode: PropTypes.func.isRequired,
};

export default Header;
