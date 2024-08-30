import Link from "next/link";
import { RegisterCard } from "./_components/RegisterCard";

export default function RegisterPage() {
  return (
    <div className='w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 py-4'>
      <div className='flex flex-col items-center justify-center'>
        <RegisterCard />
      </div>
      <div className='hidden bg-muted lg:block'>
        <img
          src='/media/img1_register.jpg'
          alt='Image'
          width={1920}
          height={1080}
          className='h-full w-full object-cover'
        />
      </div>
    </div>
  );
}
