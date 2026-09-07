import brandLogo from '@/public/brand-logo.png';
import Image from 'next/image';
import { LuUser } from 'react-icons/lu';
import ArrowDown from './icons/ArrowDown';
import Nav from './Nav';

export default function Header() {
  return (
    <header>
      <div className='border-primary-200 flex items-center justify-between border-b px-4 py-3 md:px-6 md:py-5'>
        <Image src={brandLogo} alt='Tobbams Group' width={166} height={64} />

        <div className='flex gap-4 md:gap-6'>
          <button className='btn-primary'>
            <div className='bg-primary-200 flex size-8 items-center justify-center overflow-clip rounded-full'>
              <LuUser className='text-primary-500 size-3.5 stroke-2 md:size-4.5' />
            </div>
            <span>Account</span>
            <ArrowDown className='text-primary-200 h-1.5 w-2.5' />
          </button>
          <button className='btn-primary bg-accent'>Take Assessment</button>
        </div>
      </div>

      <Nav />
    </header>
  );
}
