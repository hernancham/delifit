import { Navbar } from "./_components/Header/Navbar";
import { Footer } from "./_components/Footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
