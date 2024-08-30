import Link from "next/link";
import "/src/styles/globals.css";

export const Inicio = () => {
  return (
    <header className='hero-background bg-green h-screen bg-cover bg-center bg-no-repeat'>
      <div className='mx-auto w-full max-w-7xl px-5 py-24 md:px-10 md:py-24'>
        <div className='flex flex-col items-center justify-center text-center'>
          <div className='font-quicksand my-32 text-5xl font-bold text-white md:text-6xl leading-relaxed'>
            ENGRÍETE <span className='text-green_p-deep'>SALUDABLE</span>
          </div>

          <p className='font-quicksand mb-10 max-w-lg text-2xl text-white sm:text-4xl md:mb-10 lg:mb-12'>
            Disfruta la aventura de comer delicioso y saludable
          </p>

          <Link
            href='/productos'
            className='m-10 mb-6 mr-6 w-56 rounded-xl bg-gray-800 px-6 py-4 text-center font-semibold text-white text-xl md:mb-10 lg:mb-12 lg:mr-4 hover:bg-gray-600'
          >
            ¡Quiero pedir!
          </Link>
        </div>
      </div>
    </header>
  );
};
