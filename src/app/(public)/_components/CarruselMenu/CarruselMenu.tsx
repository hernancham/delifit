"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Skeleton } from "@/components/ui/skeleton";

import { ProductoCard } from "./ProductoCard";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// Types
import { Producto } from "@/types/db";

// Función para obtener los productos desde la API
const getProductos = async () => {
  try {
    const response = await axios.get<Producto[]>("/api/producto");
    return response.data;
  } catch (error) {
    throw new Error("Error al leer los Productos");
  }
};

// Componente de Skeleton para simular la card
const ProductoCardSkeleton = () => (
  <div className='flex flex-col gap-4 py-8 px-6 mx-auto rounded-xl'>
    <div className='mb-3 flex justify-center h-[250px]'>
      <Skeleton className='rounded-full w-auto h-full' />
    </div>
    <div className='flex flex-col items-center gap-4'>
      <div className='space-y-6 text-center'>
        <Skeleton className='h-6 w-32' />
        <Skeleton className='h-12 w-full' />
      </div>
    </div>
  </div>
);

export const CarruselMenu = () => {
  // Uso de React Query para manejar la carga de productos
  const {
    data: Productos,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["producto"],
    queryFn: getProductos,
  });

  // Configuración responsiva para el carrusel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // opcional, por defecto es 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // opcional, por defecto es 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // opcional, por defecto es 1
    },
  };

  if (isLoading) {
    return (
      <div className='py-8 bg-green_p-dark dark:bg-graphite-deep text-black dark:text-white'>
        <div className='container'>
          <div className='mb-10 space-y-5'>
            <h1 className='text-center text-4xl font-bold'>Nuestro menú</h1>
            <div className='my-6 px-8 md:px-16 lg:px-24'>
              <Carousel
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={1000}
                containerClass='carousel-container'
                itemClass='carousel-item-padding-40-px'
                swipeable={true}
                draggable={true}
                infinite={true} // Para hacer el carrusel infinito
              >
                {Array(3)
                  .fill(null)
                  .map((_, index) => (
                    <ProductoCardSkeleton key={index} />
                  ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className='py-8 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'>
        <div className='container'>
          <div className='mb-10 space-y-5'>
            <h1 className='text-center text-4xl font-bold'>Error</h1>
            <div className='my-6 px-8 md:px-16 lg:px-32'>
              <p className='text-center text-lg'>
                {error instanceof Error
                  ? error.message
                  : "Hubo un error al cargar los productos."}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='py-12 bg-green-100 dark:bg-green-900 text-gray-800 dark:text-gray-200'>
      <div className='container mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='text-5xl font-extrabold text-green-700 dark:text-green-300'>
            Nuestro menú
          </h1>
          <p className='text-lg mt-2 text-gray-600 dark:text-gray-400'>
            Descubre nuestra variedad de productos saludables y deliciosos.
          </p>
        </div>
        <div className='relative'>
          <Carousel
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={2000}
            containerClass='carousel-container'
            itemClass='carousel-item-padding-10-px'
            swipeable={true}
            draggable={true}
            infinite={true}
            //showDots={true}
            //dotListClass='custom-dot-list-style'
            // customDot={<CustomDot />} // Asegúrate de que CustomDot reciba las props correctas
          >
            {Productos?.map((producto, index) => (
              <ProductoCard
                key={index}
                producto={producto}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
