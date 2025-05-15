// src/Comopnents/Toastify/ToastWrapper.tsx
"use client";

import ToastProvider from "./ToastifyProvider";

export default function ToastWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ToastProvider>{children}</ToastProvider>;
}
