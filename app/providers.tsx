import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

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
    >
      {children}
    </ThemeProvider>
  );
}
