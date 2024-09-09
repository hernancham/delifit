import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WavesDiv } from "@/components/dividers/WavesDiv";

export const Inicio = () => {
  return (
    <header className='relative overflow-hidden h-screen'>
      <div className='absolute inset-x-0 size-full -z-50'>
        <img
          src='/media/img1_homepage.webp'
          alt='Image'
          width={1920}
          height={1080}
          className='object-cover h-full brightness-50'
        />
      </div>
      <div className='relative mx-auto w-full max-w-7xl px-5 py-24 md:px-10 md:py-24'>
        <div className='flex flex-col items-center justify-center text-center space-y-8'>
          <div className='font-quicksand text-5xl text-shadow shadow-lime-950 md:text-7xl font-bold py-5 text-white leading-tight'>
            ENGRÍETE <span className='text-green_p-deep'>SALUDABLE</span>
          </div>
          <p className='font-quicksand max-w-lg text-3xl text-white py-2 sm:text-4xl lg:text-5xl'>
            {" "}
            Disfruta la aventura de comer delicioso y saludable
          </p>

          <Link
            href='/productos'
            className='group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 ease-in-out transform hover:scale-105 text-xl py-4 px-8'
          >
            <span className='relative z-10 flex items-center'>
              ¡Quiero pedir!
              <ArrowRight className='ml-3 h-6 w-6 transition-transform duration-300 ease-in-out group-hover:translate-x-1' />
            </span>
            <span className='absolute bottom-0 left-0 w-full h-1 bg-secondary transition-all duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100' />
          </Link>
        </div>
      </div>
      <WavesDiv
        className='fill-green_p-light dark:fill-neutral-700'
        side={"bottom"}
      />
    </header>
  );
};
