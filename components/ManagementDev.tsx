import Image from 'next/image';
import img from '@/public/mangement-training.jpg';
import { HiLightningBolt } from 'react-icons/hi';

export default function ManagementDev() {
  return (
    <section className='text-primary-50 flex items-center justify-center p-8 md:p-12 lg:p-16'>
      <div className='bg-primary-800 grid items-center justify-center gap-8 rounded-2xl p-6 md:p-8 lg:grid-cols-2 lg:gap-12 lg:rounded-[20px] lg:p-10'>
        <div className='relative aspect-auto size-full min-h-100 min-w-90'>
          <Image
            src={img}
            fill
            className='rounded-lg object-cover object-center'
            alt='A group of 3 people smiling looking at a tablet screen'
          />
        </div>

        <div className='space-y-4 md:space-y-6 lg:space-y-8'>
          <div>
            <h3 className='mb-3 text-2xl font-semibold md:mb-4 md:text-3xl lg:mb-5 lg:text-4xl'>
              Management Development Program
            </h3>
            <div className='space-y-2 text-base md:space-y-3 lg:space-y-4 lg:text-lg'>
              <p>
                Tobams Group offers a comprehensive Management Development
                Program designed to equip corporate organisations with the high
                -performing leaders they need to thrive.
              </p>
              <p>
                Our program includes workshops, seminars, coaching sessions,
                online courses, and experiential learning opportunities designed
                to improve leadership, strategic thinking, communication, and
                other essential managerial competencies for corporate
                organisations.
              </p>
            </div>
          </div>
          <ul className='space-y-4 md:space-y-5 lg:space-y-6'>
            <li className='bg-primary-400 flex items-center gap-2 rounded-lg px-2 py-1 text-base lg:text-lg'>
              <HiLightningBolt />
              <span>Enhanced Leadership Skills</span>
            </li>
            <li className='bg-primary-400 flex items-center gap-2 rounded-lg px-2 py-1 text-base lg:text-lg'>
              <HiLightningBolt />
              <span>Improved Employee Engagement</span>
            </li>
            <li className='bg-primary-400 flex items-center gap-2 rounded-lg px-2 py-1 text-base lg:text-lg'>
              <HiLightningBolt />
              <span>Stronger Organisational Culture</span>
            </li>
            <li className='bg-primary-400 flex items-center gap-2 rounded-lg px-2 py-1 text-base lg:text-lg'>
              <HiLightningBolt />
              <span>Sustainable Growth</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
