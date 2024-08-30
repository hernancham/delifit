import Image from "next/image";

export const Banner = () => {
  return (
    <section className='bg-gray-200 dark:bg-neutral-800'>
      <div className='mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20 '>
        <div className='grid gap-12 sm:gap-20 lg:grid-cols-2'>
          <div className='flex justify-center lg:justify-start'>
            <div className='max-h-[530px] max-w-[570px] w-full overflow-hidden rounded-md'>
              <Image
                src='/media/img2_homepage.webp'
                width={570}
                height={530}
                layout='responsive'
                alt='Imagen delifit 2'
              />
            </div>
          </div>
          <div className='flex-col items-start gap-2'>
            <h1 className='mb-6 text-5xl font-bold text-center text-green_p-deep md:text-6xl lg:mb-8'>
              Delifit
            </h1>
            <div className='mb-8 mt-8 h-px w-full bg-green-800 dark:bg-slate-400'></div>
            <p className='dark:text-gray-100 text-sm text-black sm:text-base lg:text-xl text-justify'>
              En DELIFIT, por casi cinco años, hemos sido el sabor saludable de
              Tacna, ofreciendo opciones frescas y nutritivas. Desde desayunos
              energizantes hasta postres tentadores, cada plato resalta por sus
              ingredientes naturales y calidad insuperable.
            </p>
            <br />
            <p className='dark:text-gray-100 text-sm text-black sm:text-base lg:text-xl text-justify'>
              Como un referente culinario en la región, nos enorgullece haber
              nutrido y deleitado a los tacneños y visitantes con nuestra
              dedicación a la frescura y excelencia culinaria.
            </p>
            <br />
            <p className='dark:text-gray-100 text-sm text-black sm:text-base lg:text-xl text-justify'>
              Celebramos el equilibrio entre el buen comer y la salud,
              agradeciendo a todos quienes nos han acompañado en este viaje
              hacia una vida más saludable y deliciosa en Tacna.
            </p>
            <div className='mb-8 mt-8 h-px w-full bg-green-800 dark:bg-slate-400'></div>
          </div>
        </div>
      </div>
    </section>
  );
};
