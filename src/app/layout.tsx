import Navigation from "@/components/Navigation";
import "./globals.css";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation /> <div className="mx-auto">{children} </div>
        <Footer />
      </body>
    </html>
  );
}
