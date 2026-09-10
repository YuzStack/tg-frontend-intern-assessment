import Link from 'next/link';
import { NavItem } from './Header';
import ArrowDown from './icons/ArrowDown';

export default function MobileNav({ navMenu }: { navMenu: NavItem[] }) {
  const activeNav = '#about';

  return (
    <nav
      className='border-primary-100 bg-primary-50 absolute top-full left-0 z-50 grid w-full grid-rows-[0fr] border-b shadow-xl transition-[grid-template-rows] duration-300 ease-out peer-checked:grid-rows-[1fr] lg:hidden'
      aria-label='Mobile Navigation'
    >
      <div className='overflow-hidden'>
        <ul className='divide-primary-300 flex flex-col divide-y px-6 py-2'>
          {navMenu.map(item => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`hover:text-primary-600 active:text-primary-700 flex items-center justify-between py-3 text-base font-medium text-neutral-800 transition-colors ${item.href === activeNav && 'text-primary-500 font-semibold'}`}
              >
                <span>{item.text}</span>
                {item.hasDropDown && (
                  <ArrowDown className='text-primary-500 h-1.5 w-2.5' />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Other Action Buttons (for mobile screens) */}
        <div className='flex flex-col gap-3 px-6 pt-2 pb-6'>
          <button className='btn-primary w-full justify-center'>Account</button>
          <button className='btn-primary bg-accent w-full justify-center'>
            Take Assessment
          </button>
        </div>
      </div>
    </nav>
  );
}
