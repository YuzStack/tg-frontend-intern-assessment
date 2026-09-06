import ArrowDown from './icons/ArrowDown';

interface MenuItem {
  text: string;
  href: string;
  hasDropDown?: boolean;
}

const navMenu: MenuItem[] = [
  {
    text: 'About',
    href: '#about',
    hasDropDown: true,
  },
  {
    text: 'What We Do',
    href: '#what-we-do',
    hasDropDown: true,
  },
  {
    text: 'Jobs',
    href: '#jobs',
    hasDropDown: true,
  },
  {
    text: 'Projects',
    href: '#projects',
  },
  {
    text: 'TG Academy',
    href: '#tg-academy',
  },
  {
    text: 'Strategic Partnership',
    href: '#strategic-partnership',
  },
  {
    text: 'Pricing',
    href: '#pricing',
  },
  {
    text: 'Book a Consultation',
    href: '#book-a-consultation',
  },
];

export default function Nav() {
  const activeNav = '#about';

  return (
    <nav className='flex items-center justify-center p-3'>
      <div className='flex gap-6 md:gap-8'>
        {navMenu.map(item =>
          item.hasDropDown ? (
            <button
              className={`flex items-center gap-2 p-1 text-base font-normal md:text-lg ${item.href === activeNav ? 'text-primary-500 border-primary-500 border-b font-semibold' : ''}`}
            >
              <span>{item.text}</span>
              <ArrowDown className='text-primary-500 h-1.5 w-2.5' />
            </button>
          ) : (
            <button className='text-center'>{item.text}</button>
          ),
        )}
      </div>
    </nav>
  );
}
