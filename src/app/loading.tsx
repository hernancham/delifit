import { Loader2 } from "lucide-react";

export const Icons = {
  spinner: Loader2,
};
export default function Loading() {
  return (
    <div className='flex justify-center items-center h-screen  dark:bg-gray-800 dark:text-gray-300 bg-green_p-dark text-gray-800'>
      <p className='text-2xl font-medium'>Cargando...</p>
      <Icons.spinner className='h-16 w-16 animate-spin' />
    </div>
  );
}
