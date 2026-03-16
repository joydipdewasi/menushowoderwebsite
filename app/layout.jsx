import "./globals.css";
import Navbar from "./navber/page"; // Import your navbar

export const metadata = {
  title: "My Business",
  description: "Table booking and Digital Menu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 flex flex-col min-h-screen">
        {/* Navbar stays here so it never disappears */}
        <Navbar />
        
        {/* This main area will be scrollable */}
        <main className="grow pt-4">
          {children}
        </main>
      </body>
    </html>
  );
}