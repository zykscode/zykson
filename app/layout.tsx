import { Analytics } from "#/components/analytics";
import Footer from "#/components/footer";
import Header from "#/components/ui/header/header";
import { TailwindIndicator } from "#/components/tailwind-indicator";
import { ThemeProvider } from "#/components/theme-provider";

import "#/styles/globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="light">
        <div className="notion app">
        <div className="viewport"></div>
        <div className="frame">            <Header />
            <main className="flex-1">
           {children}     
            </main>     
            <Footer />
            </div>
          </div>
          <Analytics />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
