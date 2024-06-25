import Footer from "@/components/Footer";
import "./globals.css";
import { Navbar } from "@/components";


export const metadata = {
  title: "Pecinta Sholawat | Perbanyan Sholawat",
  description: "Website Pecinta Sholawat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='easecolor relative'>
        <Navbar/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
