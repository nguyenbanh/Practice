interface ToastType {
  type: "success" | "info" | "warn" | "error" | undefined;
  message: React.ReactNode | undefined;
}

interface ToastContextTypes {
  toastState?: ToastType | null;
  showToast: (data: ToastType) => void;
  initToastState: () => void;
}

export type { ToastType, ToastContextTypes };
