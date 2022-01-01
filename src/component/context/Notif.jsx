import { toast } from "react-toastify";
import "react-toastify/dist/inject-style";
import React from "react";
import "react-toastify/dist/ReactToastify.min.css";
export const SuccessFunc = () => {
  toast.success("success", {
    className: "custom-toast",
    draggable: true,
    position: toast.POSITION.TOP_RIGHT,

  });
  return <div></div>;
};
