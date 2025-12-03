import { Button } from '@nextui-org/react';
import { signIn, signOut } from '@/actions';
import { auth } from '@/auth';
import Profile from './components/profile';

export default async function Home() {
  const session = await auth();

  return (
    <>
      <form action={signIn}>
        <Button type="submit">Sign In</Button>
      </form>

      <form action={signOut}>
        <Button type="submit">Sign Out</Button>
      </form>

      {session?.user ? (
        <div>Signed in as {session.user.email}</div>
      ) : (
        <div>Not signed in</div>
      )}

      <Profile />
    </>
  );
}
