import { SVGProps } from 'react';

export default function ArrowDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 10 6'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='h-1.5 w-2.5' // Default fallback size
      {...props} // This Spreads custom className, onClick, etc
    >
      <path
        d='M0.75 0.750001L4.91667 4.91667L9.08333 0.750001'
        stroke='currentColor' // This forces the icon to use the text color utility
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
