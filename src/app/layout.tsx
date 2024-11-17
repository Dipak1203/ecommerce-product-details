import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Ecommerce Product Details page",
  description: "For Interview Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        {/* <Navbar /> */}
        <main className="p-4 h-screen flex align-middle justify-center max-w-screen-lg mx-auto">
          <ToastContainer position="bottom-left"/>
          {children}
        </main>
      </body>
    </html>
  );
}
