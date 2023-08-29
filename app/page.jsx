import Navbar from "@/components/Navbar";
import Hero from "../components/Hero";
import "./globals.css";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <Hero />
    </main>
  );
}
