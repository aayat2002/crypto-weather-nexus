"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
// import { ThemeProviderProps } from "next-themes/dist/types";

import { ThemeProviderProps } from "next-themes";
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
// ++++++++++++++++
// theme-provider.tsx
// "use client";

// import { ThemeProvider } from "next-themes";
// import { ReactNode } from "react";

// interface Props {
//   children: ReactNode;
//   attribute?: "class" | "style";
//   defaultTheme?: string;
//   enableSystem?: boolean;
// }

// export function CustomThemeProvider({
//   children,
//   attribute = "class",
//   defaultTheme = "system",
//   enableSystem = true,
// }: Props) {
//   return (
//     <ThemeProvider
//       attribute={attribute}
//       defaultTheme={defaultTheme}
//       enableSystem={enableSystem}
//     >
//       {children}
//     </ThemeProvider>
//   );
// }
