import "./globals.css";

export const metadata = {
  title: "DigiDine — Digital Menu, Orders & Table Booking",
  description: "One platform for your entire restaurant. Digital menus, table reservations, live orders, and WhatsApp billing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="margin-0 padding-0">
        {/* We removed the Navbar from here because it is already 
            called inside your app/page.jsx. This prevents the 
            "Double Navbar" bug.
        */}
        {children}
      </body>
    </html>
  );
}