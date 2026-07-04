"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { makeQueryClient } from "@/lib/reactQuery";
import { useState } from "react";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

import { themeValues } from "@/types/theme";

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(() => makeQueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        themes={[...themeValues]}
      >
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
