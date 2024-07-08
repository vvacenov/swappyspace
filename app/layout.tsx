// app/layout.tsx
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider/theme-provider";
import { QueryProvider } from "../lib/react-query-provider/react-query-provider";
import NavbarMainComponent from "@/components/navbar/navbar-main-component.tsx/navbar-main-component";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { AuthProvider } from "@/lib/hooks/authContext";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <QueryProvider>
              <main>
                <nav>
                  <NavbarMainComponent />
                </nav>

                <section className="flex overflow-hidden min-h-[calc(100vh-112px)] mx-auto justify-center">
                  {children}
                </section>
              </main>
            </QueryProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;