import "./globals.css";

export const metadata = {
  title: "Rate Your Exes Name",
  description: "A tiny roast machine for your exes."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
