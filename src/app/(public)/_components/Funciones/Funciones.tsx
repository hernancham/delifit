"use client";
import React from "react";
import { useRouter } from "next/navigation";

export const Funciones = () => {
  const router = useRouter();
  return (
    <>
      <div className='bg-slate-400 dark:bg-graphite-dark px-8 py-2 pb-12'>
        <h1 className='font-semibold text-3xl md:text-5xl text-center my-10 px-4 md:px-8 text-blue-950 dark:text-green-300'>
          ¿Cómo funciona?
        </h1>

        <div className='grid gap-5 md:grid-cols-3 md:gap-10'>
          <div className='bg-white shadow-md dark:bg-graphite-deep rounded-lg p-6 border-t-4 border-graphite-deep dark:border-green_p-dark mb-6 md:mb-0'>
            <div className='flex items-center mb-4'>
              <div className='bg-green_p-deep dark:bg-lime-700 text-graphite-deep dark:text-white font-bold rounded-full h-12 w-12 flex items-center justify-center mr-4'>
                1
              </div>
              <h2 className='text-lg md:text-xl font-bold text-black dark:text-green_p'>
                Crea tu cuenta
              </h2>
            </div>
            <div className='ml-4'>
              <p className='text-graphite-deep dark:text-graphite mb-4 leading-relaxed'>
                Dinos con quién tenemos el gusto de atender y poder hacer
                seguimiento de tu pedido.
              </p>
              <p className='text-graphite-deep dark:text-graphite mb-4 leading-relaxed'>
                Podrás hacer tu pago al contado, Yape o Plin, así que no dejes
                pasar mañana lo que puedes hacer hoy.
              </p>
            </div>
          </div>

          <div className='bg-white shadow-md dark:bg-graphite-deep rounded-lg p-6 border-t-4 border-graphite-deep dark:border-green_p-dark mb-6 md:mb-0'>
            <div className='flex items-center mb-4'>
              <div className='bg-green_p-deep dark:bg-lime-700 text-graphite-deep dark:text-white font-bold rounded-full h-12 w-12 flex items-center justify-center mr-4'>
                2
              </div>
              <h2 className='text-lg md:text-xl font-bold text-black dark:text-green_p'>
                Elige tus platos y personalízalos
              </h2>
            </div>
            <div className='ml-4'>
              <p className='text-graphite-deep dark:text-graphite mb-4 leading-relaxed'>
                Puedes elegir entre todos los platos y postres preparados con
                los mejores ingredientes.
              </p>
              <p className='text-graphite-deep dark:text-graphite mb-4 leading-relaxed'>
                Además de eso tendrá la opción de poder personalizar ciertos
                productos, logrando así una mejor experiencia de acuerdo a tus
                gustos.
              </p>
            </div>
            <div className='flex justify-center items-end'>
              <button
                onClick={() => router.push("/menu/productos")}
                className='bg-graphite-light dark:bg-green_p text-black dark:text-black border border-stone-700 px-4 py-2 rounded-sm flex items-center justify-center hover:bg-graphite dark:hover:bg-green_p-dark'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 mr-2'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 12h6m2 0a2 2 0 00-2-2h-1V7a2 2 0 00-4 0v3H9a2 2 0 00-2 2m12 0v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6m5 3h2'
                  />
                </svg>
                Ver platos y precios
              </button>
            </div>
          </div>

          <div className='bg-white shadow-md dark:bg-graphite-deep rounded-lg p-6 border-t-4 border-graphite-deep dark:border-green_p-dark mb-6 md:mb-0'>
            <div className='flex items-center mb-4'>
              <div className='bg-green_p-deep dark:bg-lime-700 text-graphite-deep dark:text-white font-bold rounded-full h-12 w-12 flex items-center justify-center mr-4'>
                3
              </div>
              <h2 className='text-lg md:text-xl font-bold text-black dark:text-green_p'>
                ¡Listo! Disfruta
              </h2>
            </div>
            <div className='ml-4'>
              <p className='text-graphite-deep dark:text-graphite mb-4 leading-relaxed'>
                Despreocúpate de tus comidas para siempre y recibe puntualmente
                tus comidas recién cocinadas de tu preferencia en la puerta de
                tu casa o en nuestro propio local.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-slate-400 dark:bg-gray-800'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1400 65'
          className='w-full h-auto transform rotate-180'
        >
          <path
            className='fill-yellow-50 dark:fill-graphite-dark'
            d='M1400,0H0v2.3c24.8-2.4,52.2,12,104.5,33.4c57.4,23.5,117.1,1.8,191.3-15.4c38-8.8,95.9-28.6,141.2-7.7  
      C491.3,37.6,553.7,38,593.3,30c90.2-18.2,134.9-13.9,183.7,4c97.9,35.9,105.3-15.1,224.5,22c57.4,17.9,151-9,173.8-17.9  
      c82.4-32.3,117.9,3.1,224.7,2.5V0z'
          />
        </svg>
      </div>
    </>
  );
};
