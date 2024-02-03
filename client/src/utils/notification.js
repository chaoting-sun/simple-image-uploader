import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const showSuccessToast = (notificationText) => {
  toast.success(notificationText, {
    position: "top-center",
    autoClose: 300,

  });
};

const showErrorToast = (notificationText) => {
  toast.error(notificationText, {
    position: "top-center",
    autoClose: 300,
  });
};

export { showSuccessToast, showErrorToast };