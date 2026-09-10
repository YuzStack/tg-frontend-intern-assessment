import Image from 'next/image';
import img from '@/public/bg-hero.jpg';

export default function Hero() {
  return (
    <section className='text-primary-50 relative flex h-[70dvh] min-h-130 w-full items-center justify-center p-3 text-center md:p-4'>
      {/* Background Image */}
      <Image
        src={img}
        fill
        sizes='100vw'
        priority
        placeholder='blur'
        className='object-cover object-center'
        alt='A woman looking at statistics on a screen'
      />

      {/* Overlay */}
      <div className='absolute inset-0 bg-black/70' />

      {/* Content */}
      <div className='z-10 flex flex-col items-center gap-6'>
        <div className='bg-primary-50/10 w-fit rounded-full px-8 py-2 text-sm uppercase'>
          What We Do
        </div>
        <h2 className='text-2xl font-bold md:text-4xl lg:text-6xl'>
          Training and Development
        </h2>
        <p className='text-sm font-semibold md:max-w-[80vw] md:text-base lg:max-w-[70vw] lg:text-lg'>
          Our comprehensive range of programs and resources is designed to
          enhance skills, broaden knowledge, and propel careers forward in
          today's ever-evolving landscape.
        </p>
        <button className='btn-primary'>Book a Consultation</button>
      </div>
    </section>
  );
}
