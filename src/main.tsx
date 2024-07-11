import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "../styles/flags/custom-style.scss";
import { App } from "./App";
import { AuthProvider } from "./contexts/AuthContext";
import { LayoutProvider } from "./contexts/LayoutContext";
import { ToastProvider } from "./contexts/ToastContext";
import "./i18n";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      refetchInterval: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LayoutProvider>
        <PrimeReactProvider>
          <ToastProvider>
            <AuthProvider>
              <QueryClientProvider client={queryClient}>
                <App />
              </QueryClientProvider>
            </AuthProvider>
          </ToastProvider>
        </PrimeReactProvider>
      </LayoutProvider>
    </BrowserRouter>
  </React.StrictMode>
);
