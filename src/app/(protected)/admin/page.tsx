import { auth } from "@/auth/auth";
import { LogoutButton } from "../_components/LogoutButton";

export default async function Page() {
  const session = await auth();

  console.log(session);

  if (session?.user?.role !== "admin") {
    return <div>You are not admin</div>;
  }

  return (
    <div className='container'>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <LogoutButton />
    </div>
  );
}
