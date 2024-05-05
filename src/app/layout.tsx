// External dependencies
import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import CssBaseline from "@mui/material/CssBaseline";

// Internal dependencies
import { ModeProvider } from "../../context/ThemeContext";
import MainContainer from "../../components/PageWrapper";
import CustomThemeProvider from "../../Theme";

export const metadata: Metadata = {
  title: "Debakanta Satapathy",
  description: "Debakanta Satapathy Web Developer",
  icons: {
    icon: "/image/DS.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ height: "100vh" }}>
        <AppRouterCacheProvider>
          <ModeProvider>
            <CustomThemeProvider>
              <CssBaseline enableColorScheme />
              <MainContainer>{children}</MainContainer>
            </CustomThemeProvider>
          </ModeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
