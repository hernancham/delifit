import { Navbar } from "./_components/Header/Navbar";
import { Footer } from "./_components/Footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className='container min-h-screen px-4'>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
