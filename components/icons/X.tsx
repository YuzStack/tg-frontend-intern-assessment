import { SVGProps } from 'react';

export default function X(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 22 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='h-5 w-5.5' // Default fallback size
      {...props} // This Spreads custom className, onClick, etc
    >
      <path d='M0 0H2.5L17.5 20H15L0 0Z' fill='currentColor' />
      <path d='M4.5 0H7L22 20H19.5L4.5 0Z' fill='currentColor' />
      <path d='M2 0H7V2H2V0Z' fill='currentColor' />
      <path d='M15 20H20V18H15V20Z' fill='currentColor' />
      <path d='M17.5 0H21L4 20H0.5L17.5 0Z' fill='currentColor' />
    </svg>
  );
}
