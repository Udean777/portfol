import Particle from "../components/Particles";
import "./globals.css";

export const metadata = {
  title: `Sajudin Ma'ruf`,
  description: "This web is made by Udean777",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-slate-300 to-slate-200 dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-500">
        <Particle />
        {children}
      </body>
    </html>
  );
}
