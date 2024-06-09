"use client"
import { ToastContainer as ReactToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastContainer = () => {
  return <ReactToastContainer />;
};

export const showToast = (selectedOption: any, type = {}) => {
  // toast(message, options);
  if(type == "success"){
    toast.success(`${type} toast notification`, {
      position: selectedOption,
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "colored",
    });
  }else if(type == "info"){
    toast.info(`${type} toast notification`, {
      position: selectedOption,
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "colored",
    });
  }else if(type == "warning"){
    toast.warn(`${type} toast notification`, {
      position: selectedOption,
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "colored",
    });
  }else if(type == "error"){
    toast.error(`${type} toast notification`, {
      position: selectedOption,
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "colored",
    });
  }
};

export default ToastContainer;
