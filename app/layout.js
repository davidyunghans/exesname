import "./globals.css";

export const metadata = {
  title: "Rate Your Exes Name",
  description: "Find the perfect name for your next ex."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
