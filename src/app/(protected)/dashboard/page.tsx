import { auth } from "@/auth/auth";
import { LogoutButton } from "../_components/LogoutButton";

export default async function Page() {
  const session = await auth();

  if (!session) {
    return <div>Not authenticated</div>;
  }

  return (
    <div className='container'>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <LogoutButton />
    </div>
  );
}
