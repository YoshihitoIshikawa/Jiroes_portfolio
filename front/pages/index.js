import LoginButton from '@/components/logInButton';
import LogoutButton from '@/components/logOutButton';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='fixed w-screen h-screen bg-yellow-200 -z-50'>
      <div className="flex justify-center mt-20">
        <div className="sm:w-1/2 flex flex-col">
          <div>
            hello world!
          </div>
        </div>
      </div>
    </div>
  )
}
