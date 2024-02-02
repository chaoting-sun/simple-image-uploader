import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const showSuccessToast = (notificationText) => {
  toast.success(notificationText, {
    position: "top-center",
    autoClose: 300,
    // closeButton: false
    // closeOnClick: true,
    // pauseOnHover: true,
    // draggable: true,
    // progress: undefined,
  });
};

const showErrorToast = (notificationText) => {
  toast.error(notificationText, {
    position: "top-center",
    autoClose: 300,
    // closeButton: false
    // closeOnClick: true,
    // pauseOnHover: true,
    // draggable: true,
    // progress: undefined,
  });
};

export { showSuccessToast, showErrorToast };