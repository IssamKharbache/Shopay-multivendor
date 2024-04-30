"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";

import { ourFileRouter } from "../app/api/uploadthing/core";

export const Providers = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Toaster richColors />
      <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
      {children}
    </ThemeProvider>
  );
};
