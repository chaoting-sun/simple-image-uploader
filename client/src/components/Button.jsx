import PropTypes from "prop-types";

const Button = ({ iconURL, text, handleOnClick }) => {
  return (
    <button className="rounded-md bg-blue-500 hover:bg-blue-400 px-3 py-2 text-[12px] text-white" onClick={handleOnClick}>
      <img src={iconURL} className="inline-block mr-2 h-4" />
      {text}
    </button>
  );
};

Button.propTypes = {
  iconURL: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

export default Button;
