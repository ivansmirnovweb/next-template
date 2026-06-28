import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

import { themeValues } from "@/types/theme";

type ProvidersProps = Readonly<{
  children: ReactNode;
}>;

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      themes={[...themeValues]}
    >
      {children}
    </ThemeProvider>
  );
}
