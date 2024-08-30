import { Inicio } from "./_components/Inicio/Inicio";
import { Banner } from "./_components/Banner/Banner";
import { Funciones } from "./_components/Funciones/Funciones";
import { CarruselMenu } from "./_components/CarruselMenu/CarruselMenu";

export default function Home() {
  return (
    <main>
      <Inicio />
      <Banner />
      <Funciones />
      <CarruselMenu />
    </main>
  );
}
