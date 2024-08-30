import { LoginCard } from "./_components/LoginCard";

export default function LoginPage({
  searchParams,
}: {
  searchParams: { verified: string; error: string };
}) {
  const isVerified = searchParams.verified === "true";
  const OAuthAccountNotLinked = searchParams.error === "OAuthAccountNotLinked";

  return (
    <div className='w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 py-4'>
      <div className='hidden bg-muted lg:block'>
        <img
          src='/media/img1_login.webp'
          alt='Image'
          width={1920}
          height={1080}
          className='h-full w-full object-cover'
        />
      </div>
      <div className='flex items-center justify-center'>
        <LoginCard
          isVerified={isVerified}
          OAuthAccountNotLinked={OAuthAccountNotLinked}
        />
      </div>
    </div>
  );
}
