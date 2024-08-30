import { Navbar } from "./_components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className='container min-h-screen px-4'>
      <Navbar />
      {children}
    </section>
  );
}
