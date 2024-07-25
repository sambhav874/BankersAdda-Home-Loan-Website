import { useSession, getSession } from 'next-auth/react';
import Link from 'next/link';

const AuthError = ({ error }) => {
  let errorMessage = '';

  switch (error) {
    case 'OAuthAccountNotLinked':
      errorMessage = 'This email is already linked to another account. Please sign in using the same method you used to create the account or contact support.';
      break;
    default:
      errorMessage = 'An error occurred. Please try again.';
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">Authentication Error</h1>
      <p className="mt-4 text-lg text-red-500">{errorMessage}</p>
      <Link href="/auth/signin">
        <a className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Go to Sign In</a>
      </Link>
    </div>
  );
};

// Fetch the error message from the query parameters
export async function getServerSideProps(context) {
  const session = await getSession(context);
  const { error } = context.query;
  
  return {
    props: {
      error: error || null
    }
  };
}

export default AuthError;
