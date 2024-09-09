import { Navbar } from "./_components/Navbar";
import { Footer } from "./_components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className='w-full'>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
