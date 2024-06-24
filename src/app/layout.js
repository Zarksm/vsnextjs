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
      <body className='easecolor'>
        <Navbar/>
        <div className="bg-secondary">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
