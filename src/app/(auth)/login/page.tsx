import { LoginForm } from "./_components/LoginForm";

export default function LoginPage({
  searchParams,
}: {
  searchParams: { verified: string; error: string };
}) {
  const isVerified = searchParams.verified === "true";
  const OAuthAccountNotLinked = searchParams.error === "OAuthAccountNotLinked";

  return (
    <div>
      <LoginForm
        isVerified={isVerified}
        OAuthAccountNotLinked={OAuthAccountNotLinked}
      />
    </div>
  );
}
