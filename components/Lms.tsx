import Image from 'next/image';
import lms from '@/public/lms.jpg';
import { MdArrowOutward } from 'react-icons/md';

export default function Lms() {
  return (
    <section className='bg-primary-100 text-primary-950 my-5 grid items-center justify-center gap-8 px-10 py-6 lg:my-10 lg:grid-cols-2 lg:gap-15 lg:px-16 lg:py-12'>
      <Image
        src={lms}
        placeholder='blur'
        quality={80}
        className='aspect-square max-w-150 min-w-80 rounded-full'
        alt='Two Coorporate people smilling'
      />

      <div className='space-y-4 lg:space-y-5'>
        <h3 className='text-primary-500 text-2xl font-semibold sm:text-3xl lg:text-4xl'>
          Learning Management System
        </h3>
        <div className='bg-primary-300 space-y-3 rounded-lg p-4 lg:p-6'>
          <p className='text-base lg:text-lg'>
            TG Academy is a hub of knowledge and skill-building resources
            designed to empower tech talents on their learning journey. From
            technical courses covering the latest programming languages and
            development frameworks to soft skills training in leadership,
            effective communication and project management, TG Academy offers a
            wide range of courses to cater to diverse learning needs. With
            accessible and interactive learning materials, individuals can
            enhance their skills and stay ahead in today's competitive tech
            landscape.
          </p>
          <h4 className='text-primary-500 text-base font-bold lg:text-lg'>
            Some of our courses include:
          </h4>
          <ul className='flex flex-wrap items-center gap-3 px-2'>
            <li className='flex items-center gap-1.5 text-sm lg:text-base'>
              <span>&bull;</span>
              <span>Business Analysis</span>
            </li>
            <li className='flex items-center gap-1.5 text-sm lg:text-base'>
              <span>&bull;</span>
              <span>Design Thinking</span>
            </li>
            <li className='flex items-center gap-1.5 text-sm lg:text-base'>
              <span>&bull;</span>
              <span>Effective Communication</span>
            </li>
            <li className='flex items-center gap-1.5 text-sm lg:text-base'>
              <span>&bull;</span>
              <span>Entrepreneurship</span>
            </li>
            <li className='flex items-center gap-1.5 text-sm lg:text-base'>
              <span>&bull;</span>
              <span>Career Development</span>
            </li>
            <li className='flex items-center gap-1.5 text-sm lg:text-base'>
              <span>&bull;</span>
              <span>Business Model</span>
            </li>
          </ul>
        </div>
        <button className='btn-primary'>
          <span>Learn More</span>
          <MdArrowOutward />
        </button>
      </div>
    </section>
  );
}
