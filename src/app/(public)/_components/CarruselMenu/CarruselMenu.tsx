"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

// Tipos para CustomDot
interface CustomDotProps {
  onClick: () => void;
  active: boolean;
}

// Componente para los puntos de navegación del carrusel
const CustomDot = ({ onClick, active }: CustomDotProps) => (
  <button
    className={`w-3 h-3 rounded-full mx-2 ${
      active ? "bg-green-700" : "bg-gray-300"
    }`}
    onClick={onClick}
    aria-label='slide dot'
  />
);
