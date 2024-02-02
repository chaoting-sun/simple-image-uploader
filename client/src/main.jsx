import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { UploadProvider } from "./containers/UseUpload.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UploadProvider>
      <App />
    </UploadProvider>
  </React.StrictMode>
);
