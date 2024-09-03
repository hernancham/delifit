"use client";

import { Button } from "@/components/ui/button";
import { Producto } from "@/types/db";
import { EyeIcon, ShoppingBasket } from "lucide-react";
/* import { useCartStore } from "@/store/shopcart"; */

export const ProductoCard = ({ producto }: { producto: Producto }) => {
  /* const addToCartProducto = useCartStore((state) => state.addToCartProducto); */

  return (
    <div className='min-w-[240px] max-w-[300px] bg-beige-light dark:bg-neutral-700 rounded-xl duration-500 hover:scale-105 hover:shadow-xl shadow-md flex flex-col justify-between'>
      <div className='relative'>
        <img
          src={producto.img_url}
          alt={producto.nombre}
          className='w-full aspect-square object-cover rounded-t-xl'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-beige-light via-transparent to-transparent rounded-t-xl dark:from-graphite-deep'></div>
        <h3 className='absolute inset-x-0 bottom-0 block text-xl font-bold capitalize text-black dark:text-white p-4 shadow text-center'>
          {producto.nombre}
        </h3>
      </div>
      <div className='flex flex-col items-center gap-2 p-2'>
        <Button
          onClick={() =>
            // Acción para el botón, abrir un modal con más detalles del producto
            {}
          }
          className='bg-gray-700 text-white w-full hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-900 transition-colors duration-300'
        >
          <EyeIcon className='size-6 mr-2' /> Ver detalles
        </Button>
      </div>
    </div>
  );
};
