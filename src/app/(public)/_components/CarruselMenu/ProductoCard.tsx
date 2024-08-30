"use client";

import { Button } from "@/components/ui/button";
import { Producto } from "@/types/db";
import { EyeIcon } from "lucide-react";

export const ProductoCard = ({ producto }: { producto: Producto }) => {
  return (
    <div className='flex flex-col gap-4 py-2 px-6 mx-6 rounded-2xl border border-green-300 shadow-xl hover:shadow-2xl transition-shadow duration-300'>
      <div className='mb-4 flex justify-center h-[250px]'>
        <img
          src={producto.img_url}
          alt={producto.nombre}
          className='rounded-lg w-auto h-full object-cover border-4 border-green-200 shadow-lg'
        />
      </div>
      <div className='flex flex-col items-center gap-4'>
        <div className='text-center'>
          <h1 className='text-xl font-bold text-green-700'>
            {producto.nombre}
          </h1>
          {/* Puedes añadir más detalles aquí si lo deseas */}
        </div>
        <Button
          onClick={() =>
            // Acción para el botón, por ejemplo abrir un modal con más detalles del producto
            {}
          }
          className='bg-green-500 text-white w-full hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800 transition-colors duration-300'
        >
          <EyeIcon className='size-6 mr-2' /> Ver detalles
        </Button>
      </div>
    </div>
  );
};
