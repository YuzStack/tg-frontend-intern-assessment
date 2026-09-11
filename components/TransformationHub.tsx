import img from '@/public/transformation-hub.jpg';
import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md';
import { RiFlashlightLine } from 'react-icons/ri';

export default function TransformationHub() {
  return (
    <section className='text-primary-950 flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16'>
      <div className='bg-secondary-400 space-y-4 rounded-xl p-6 md:space-y-5 md:p-8 lg:space-y-6 lg:rounded-2xl lg:p-10'>
        <div>
          <p className='text-accent-2 text-lg font-semibold italic lg:text-xl'>
            Learning With Our CEO:
          </p>
          <h3 className='text-primary-500 text-xl font-semibold italic md:text-2xl lg:text-3xl'>
            Transformation Hub With Jite Newton
          </h3>
        </div>

        <p className='text-base lg:text-lg'>
          Transformation Hub with Jite Newton is a flagship webinar series
          curated by the CEO, Dr. Jite Newton. Designed to elevate career
          trajectories and leadership capabilities, this exclusive event offers
          invaluable insights and strategies for personal and professional
          growth. Whether you're seeking to advance your career or enhance your
          leadership skills, the Transformation Hub provides a transformative
          learning experience to unlock your full potential and drive success in
          your endeavours.
        </p>

        <div className='grid items-center justify-center gap-4 md:gap-6 lg:grid-cols-2 lg:gap-8'>
          <Image
            src={img}
            placeholder='blur'
            quality={80}
            className='h-auto min-w-70 rounded-lg'
            alt='A woman looking at a relection of herself amused'
          />

          <div className='bg-secondary-300 space-y-4 rounded-lg px-3 py-6 md:space-y-5 lg:space-y-6 lg:px-5 lg:py-8'>
            <ul className='grid gap-2 gap-x-3 sm:grid-cols-2 md:gap-3 md:gap-x-4 lg:gap-4 lg:gap-x-5'>
              <li className='bg-primary-50 flex items-center gap-2 rounded-lg p-2 text-sm md:p-3 md:text-base lg:p-4 lg:text-lg'>
                <RiFlashlightLine className='shrink-0 text-xl' />
                <span>Strategic Career Guidance</span>
              </li>
              <li className='bg-primary-50 flex items-center gap-2 rounded-lg p-2 text-sm md:p-3 md:text-base lg:p-4 lg:text-lg'>
                <RiFlashlightLine className='shrink-0 text-xl' />
                <span>Leadership Development</span>
              </li>
              <li className='bg-primary-50 flex items-center gap-2 rounded-lg p-2 text-sm md:p-3 md:text-base lg:p-4 lg:text-lg'>
                <RiFlashlightLine className='shrink-0 text-xl' />
                <span>CV Development</span>
              </li>
              <li className='bg-primary-50 flex items-center gap-2 rounded-lg p-2 text-sm md:p-3 md:text-base lg:p-4 lg:text-lg'>
                <RiFlashlightLine className='shrink-0 text-xl' />
                <span>Sustainability Leadership</span>
              </li>
              <li className='bg-primary-50 flex items-center gap-2 rounded-lg p-2 text-sm md:p-3 md:text-base lg:p-4 lg:text-lg'>
                <RiFlashlightLine className='shrink-0 text-xl' />
                <span>Communication Skills</span>
              </li>
              <li className='bg-primary-50 flex items-center gap-2 rounded-lg p-2 text-sm md:p-3 md:text-base lg:p-4 lg:text-lg'>
                <RiFlashlightLine className='shrink-0 text-xl' />
                <span>Business Model</span>
              </li>
            </ul>
            <button className='btn-primary'>
              <span>Learn More</span>
              <MdArrowOutward />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
