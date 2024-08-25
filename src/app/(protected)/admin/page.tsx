import { auth } from "@/auth";
import { UserRole } from "@prisma/client";

export default async function Page() {
  const session = await auth();

  // console.log(session);

  if (session?.user?.rol !== UserRole.Admin) {
    return <div>No tienes el rol de Admin</div>;
  }

  return (
    <div className='container'>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
