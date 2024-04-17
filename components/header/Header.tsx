import Headerbar from '@/components/header/Headerbar';
import { auth } from '@/auth';

export default async function Header() {
  const session = await auth();
  console.log("session:",session?.user)
  return <Headerbar user={session?.user} />;
}
