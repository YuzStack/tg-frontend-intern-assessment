import { NavItem } from './Header';
import ArrowDown from './icons/ArrowDown';

export default function DesktopNav({ navMenu }: { navMenu: NavItem[] }) {
  const activeNav = '#about';

  return (
    <nav className='hidden lg:flex lg:items-center lg:justify-center lg:p-3'>
      <ul className='flex gap-6 md:gap-8'>
        {navMenu.map(item => (
          <li key={item.href}>
            <a
              href={item.href}
              className={`hover:text-primary-500 flex items-center gap-2 p-1 text-lg transition-all hover:font-semibold ${item.href === activeNav && 'text-primary-500 border-primary-500 border-b font-semibold'}`}
            >
              <span>{item.text}</span>
              {item.hasDropDown && (
                <ArrowDown className='text-primary-500 h-1.5 w-2.5' />
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
