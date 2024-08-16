export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className='grid place-items-center min-h-screen'>
      {children}
    </section>
  );
}
