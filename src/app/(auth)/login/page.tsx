import { LoginCard } from "./_components/LoginCard";

export default function LoginPage({
  searchParams,
}: {
  searchParams: { verified: string; error: string };
}) {
  const isVerified = searchParams.verified === "true";
  const OAuthAccountNotLinked = searchParams.error === "OAuthAccountNotLinked";

  return (
    <div>
      <LoginCard
        isVerified={isVerified}
        OAuthAccountNotLinked={OAuthAccountNotLinked}
      />
    </div>
  );
}
