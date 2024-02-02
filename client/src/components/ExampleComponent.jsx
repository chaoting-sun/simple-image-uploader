import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ExampleComponent = () => {
  const showSuccessToast = () => {
    toast.success('Operation was successful!', {
      position: 'top-center',
      autoClose: 5000,
    });
  };

  return (
    <div>
      <button onClick={showSuccessToast}>Show Success Toast</button>
    </div>
  );
};

export default ExampleComponent;