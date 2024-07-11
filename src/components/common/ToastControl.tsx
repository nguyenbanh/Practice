import { Toast } from "primereact/toast";
import { useContext, useEffect, useRef } from "react";
import { ToastContext } from "../../contexts/ToastContext";
import { ToastContextTypes, ToastType } from "../../types/ToastTypes";

const ToastControl = () => {
  const _toastRef = useRef<any>(null);

  const { toastState, initToastState } =
    useContext<ToastContextTypes>(ToastContext);

  useEffect(() => {
    if (!toastState) return;
    showToast(toastState);
  }, [toastState]);

  const showToast = (toastData: ToastType) => {
    if (_toastRef.current) {
      _toastRef.current.show({
        severity: toastData?.type,
        detail: toastData?.message,
      });
    }
  };

  const clearToastState = () => initToastState();

  return <Toast position="top-center" ref={_toastRef} onHide={clearToastState} />;
};

export default ToastControl;
