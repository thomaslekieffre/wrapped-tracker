import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="mb-4 text-center">
        <h1 className="text-2xl font-bold">Connexion</h1>
        <p className="text-sm text-muted-foreground">
          Connectez-vous pour accéder à votre tableau de bord
        </p>
      </div>
      <SignIn
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