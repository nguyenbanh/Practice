import { createContext, useCallback, useMemo, useState } from "react";
import ToastControl from "../components/common/ToastControl";
import { ToastContextTypes, ToastType } from "../types/ToastTypes";

export const ToastContext = createContext<ToastContextTypes>(
  {} as ToastContextTypes,
);
export const ToastProvider = (props: any) => {
  const [toastState, setToastState] = useState<ToastType | null>();

  const showToast = useCallback((data: ToastType) => {
    if (!data) return;
    setToastState(data);
  }, []);

  const initToastState = useCallback(() => {
    setToastState(null);
  }, []);

  const contextValue = useMemo(() => {
    return { toastState, showToast, initToastState };
  }, [toastState, showToast, initToastState]);

  return (
    <ToastContext.Provider value={contextValue}>
      {props.children}
      <ToastControl />
    </ToastContext.Provider>
  );
};
