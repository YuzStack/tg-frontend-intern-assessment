import brandLogo from '@/public/brand-logo.png';
import Image from 'next/image';
import { LuUser } from 'react-icons/lu';
import ArrowDown from './icons/ArrowDown';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import Link from 'next/link';
import Hamburger from './icons/Hamburger';

export interface NavItem {
  text: string;
  href: string;
  hasDropDown?: boolean;
}

const navMenu: NavItem[] = [
  { text: 'About', href: '#about', hasDropDown: true },
  { text: 'What We Do', href: '#what-we-do', hasDropDown: true },
  { text: 'Jobs', href: '#jobs', hasDropDown: true },
  { text: 'Projects', href: '#projects' },
  { text: 'TG Academy', href: '#tg-academy' },
  { text: 'Strategic Partnership', href: '#strategic-partnership' },
  { text: 'Pricing', href: '#pricing' },
  { text: 'Book a Consultation', href: '#book-a-consultation' },
];

export default function Header() {
  return (
    <header className='relative'>
      <div className='border-primary-200 flex items-center justify-between border-b px-4 py-3 md:px-6 md:py-5'>
        <Link href='/'>
          <Image
            src={brandLogo}
            alt='Tobbams Group'
            width={166}
            height={64}
            className='h-auto w-28 md:w-36 lg:w-41.5'
          />
        </Link>

        {/* Hidden Controller Checkbox (for tablet and mobile screens) */}
        <input
          type='checkbox'
          id='mobile-menu-toggle'
          className='peer hidden'
        />

        {/* Hamburger Icon (for tablet and mobile screens) */}
        <label
          htmlFor='mobile-menu-toggle'
          className='cursor-pointer lg:hidden peer-checked:[&_.bar-bot]:-translate-y-2 peer-checked:[&_.bar-bot]:-rotate-45 peer-checked:[&_.bar-mid]:opacity-0 peer-checked:[&_.bar-top]:translate-y-2 peer-checked:[&_.bar-top]:rotate-45'
          aria-label='Toggle Menu'
        >
          <Hamburger />
        </label>

        <MobileNav navMenu={navMenu} />

        {/* Other Action Buttons (for desktop screens) */}
        <div className='hidden lg:flex lg:gap-6'>
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

      <DesktopNav navMenu={navMenu} />
    </header>
  );
}
