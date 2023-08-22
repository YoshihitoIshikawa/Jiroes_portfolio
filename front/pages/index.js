import { Inter } from 'next/font/google';
import LoginButton from '@/components/logInButton';
import LogoutButton from '@/components/logOutButton';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <div className="z-10 max-w-5xl w-full font-mono text-sm lg:flex">
        <LoginButton/>
        <LogoutButton/>
      </div>
    </main>
  )
}
