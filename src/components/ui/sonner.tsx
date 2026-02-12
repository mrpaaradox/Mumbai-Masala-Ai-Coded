"use client";

import type * as React from "react";
import { Toaster as SonnerToaster } from "sonner";

export type ToasterProps = React.ComponentProps<typeof SonnerToaster>;

export function Toaster(props: ToasterProps) {
  return (
    <SonnerToaster
      position="bottom-right"
      duration={4000}
      theme="light"
      toastOptions={{
        classNames: {
          toast:
            "bg-forest-900 text-white border border-forest-700/60 shadow-2xl rounded-2xl px-5 py-4 backdrop-blur-sm",
          title: "text-sm font-semibold text-white",
          description: "text-xs text-sage-200 mt-1",
          icon:
            "bg-sage-400 text-forest-900 rounded-full flex items-center justify-center",
          closeButton:
            "text-sage-200 hover:text-forest-900 hover:bg-sage-400/80 rounded-full",
        },
      }}
      {...props}
    />
  );
}

