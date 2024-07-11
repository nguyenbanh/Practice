import { useContext, useState } from "react";
import { ToastContext } from "../contexts/ToastContext";
import { ToastContextTypes } from "../types/ToastTypes";

export const useToast = () => {
  const { showToast } = useContext<ToastContextTypes>(ToastContext);

  const [toast] = useState({
    showToast: showToast,
  });

  return toast;
};
