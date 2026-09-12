'use client';

import Image, { StaticImageData } from 'next/image';
import img1 from '@/public/testimonial-1.png';
import img2 from '@/public/testimonial-2.png';
import img3 from '@/public/testimonial-3.png';
import img4 from '@/public/testimonial-4.jpg';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import { MouseEventHandler, useState } from 'react';

interface Testimonial {
  image: StaticImageData;
  name: string;
  position: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    image: img1,
    name: 'Aisha Yusuf',
    position: 'Founder, CraftHub NG',
    review:
      'Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!',
  },
  {
    image: img2,
    name: 'John Davies',
    position: 'Marketing Manager, E-Commerce Emporium',
    review:
      "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
  },
  {
    image: img3,
    name: 'Chinonso Nwankwo',
    position: 'HR Director, FutureTech Solutions',
    review:
      'Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.',
  },
  {
    image: img4,
    name: 'Peter Okoye',
    position: 'Managing Director, Softrays IT',
    review:
      'The Creative and Digital Media services at Tobams Group brought our ideas to life. Simple, creative, and impactful – exactly what we needed for our projects.',
  },
];

export default function Testimonials() {
  const [curTest, setCurTest] = useState(0);
  if (!testimonials.length) return null;

  function goToNextTest() {
    const hasNext = curTest < testimonials.length - 1;

    if (hasNext) setCurTest((curTest) => curTest + 1);
    else setCurTest(0);
  }

  function goToPrevTest() {
    const hasPrev = curTest > 0;

    if (hasPrev) setCurTest((curTest) => curTest - 1);
    else setCurTest(testimonials.length - 1);
  }

  return (
    <section className='bg-secondary-200 text-primary-950 py-6 sm:py-8 md:py-12 lg:py-16'>
      <div className='space-y-6 px-6 sm:px-8 md:space-y-8 md:px-12 lg:space-y-10 lg:px-16'>
        <h2 className='text-center text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl'>
          Testimonials
        </h2>
        <ul className='mx-auto flex items-center gap-6 overflow-hidden'>
          {testimonials.map((testimonial, i) => (
            <li
              key={testimonial.name}
              className='bg-primary-50 border-accent max-w-100 min-w-75 space-y-4 rounded-lg border-l-2 p-5 shadow-sm transition-all duration-1000 md:shrink-0 md:space-y-6 md:rounded-xl md:px-6 md:py-5 lg:rounded-2xl'
              style={{
                transform: `translateX(calc(${-100 * curTest}% - ${curTest * 24}px))`,
              }}
            >
              <div className='flex items-center gap-4 md:gap-5'>
                <div className='flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full'>
                  <Image
                    src={testimonial.image}
                    width={44}
                    height={44}
                    alt='Aisha Yusuf'
                  />
                </div>
                <div className='flex flex-col'>
                  <h5 className='text-sm font-semibold sm:text-base md:text-lg'>
                    {testimonial.name}
                  </h5>
                  <p className='text-primary-950/60 text-xs md:text-sm'>
                    {testimonial.position}
                  </p>
                </div>
              </div>
              <p className='text-sm sm:text-base md:text-lg'>
                {testimonial.review}
              </p>
            </li>
          ))}
        </ul>
        <div className='flex items-center justify-end'>
          <div className='flex gap-3'>
            <ArrowBtn onClick={goToPrevTest}>
              <MdOutlineKeyboardArrowLeft className='text-accent text-3xl md:text-4xl' />
            </ArrowBtn>
            <ArrowBtn onClick={goToNextTest}>
              <MdOutlineKeyboardArrowRight className='text-accent text-3xl md:text-4xl' />
            </ArrowBtn>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ArrowBtnProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function ArrowBtn({ children, onClick }: ArrowBtnProps) {
  return (
    <button
      onClick={onClick}
      className='bg-accent/10 flex size-7 items-center justify-center rounded-sm md:size-8 md:rounded-lg'
    >
      {children}
    </button>
  );
}
