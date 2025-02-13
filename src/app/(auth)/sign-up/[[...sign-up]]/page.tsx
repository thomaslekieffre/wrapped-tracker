import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="mb-4 text-center">
        <h1 className="text-2xl font-bold">Inscription</h1>
        <p className="text-sm text-muted-foreground">
          Créez votre compte pour commencer à suivre vos données
        </p>
      </div>
      <SignUp
        appearance={{
          elements: {
            rootBox: 'w-full',
            card: 'rounded-lg shadow-md',
          },
        }}
      />
    </div>
  );
}
