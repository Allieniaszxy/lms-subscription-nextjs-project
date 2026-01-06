import { SignIn } from "@clerk/nextjs";

const SignInPage = async ({
  searchParams,
}: {
  searchParams: { redirect_url?: string };
}) => {
  const params = await searchParams;
  const redirectUrl = params.redirect_url || "/dashboard";
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-gray-50 to-gray-500">
      <SignIn
        redirectUrl={redirectUrl}
        signUpUrl="/sign-up"
        afterSignInUrl={redirectUrl}
        appearance={{
          elements: {
            formButtonPrimary:
              "bg-blue-600 hover:bg-blue-700 text-white text-sm normal-case",
            card: "shadow-xl",
          },
        }}
      />
    </div>
  );
};

export default SignInPage;
