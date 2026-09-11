import Image from 'next/image';
import img1 from '@/public/training-1.jpg';
import img2 from '@/public/training-2.jpg';
import img3 from '@/public/training-3.jpg';
import { HiLightningBolt } from 'react-icons/hi';

export default function Trainings() {
  return (
    <section className='space-y-12 p-6 sm:p-8 md:space-y-16 md:p-12 lg:space-y-20 lg:p-16'>
      <div className='grid items-center justify-center gap-6 md:gap-12 lg:grid-cols-2 lg:gap-16'>
        <h3 className='text-xl font-semibold md:text-2xl lg:hidden lg:text-3xl'>
          Corporate Trainings
        </h3>
        <Image
          src={img1}
          placeholder='blur'
          quality={80}
          className='h-auto min-w-70 rounded-lg rounded-tl-4xl lg:order-2'
          alt='An individual training a group of people in a coorporate setting'
        />
        <div className='space-y-4 lg:space-y-5'>
          <h3 className='hidden text-xl font-semibold md:text-2xl lg:block lg:text-3xl'>
            Corporate Trainings
          </h3>
          <p className='text-primary-950/60 text-base lg:text-lg'>
            Empower your team with our customised Corporate Training programs
            designed to address the unique needs and objectives of your
            organisation. Our expert facilitators work closely with your team to
            deliver tailored learning experiences that align with your company's
            goals and values.
          </p>
          <ul className='text-primary-950/60 gap-2'>
            <li className='flex items-center gap-2 text-base lg:text-lg'>
              <HiLightningBolt className='text-primary-800' />
              <span>Leadership Training</span>
            </li>
            <li className='flex items-center gap-2 text-base lg:text-lg'>
              <HiLightningBolt className='text-primary-800' />
              <span>Strategic Planning and Implementation</span>
            </li>
            <li className='flex items-center gap-2 text-base lg:text-lg'>
              <HiLightningBolt className='text-primary-800' />
              <span>Project Management</span>
            </li>
            <li className='flex items-center gap-2 text-base lg:text-lg'>
              <HiLightningBolt className='text-primary-800' />
              <span>Sustainability Training</span>
            </li>
            <li className='flex items-center gap-2 text-base lg:text-lg'>
              <HiLightningBolt className='text-primary-800' />
              <span>Customised Training</span>
            </li>
          </ul>
        </div>
      </div>

      <div className='grid items-center justify-center gap-6 md:gap-12 lg:grid-cols-2 lg:gap-16'>
        <h3 className='text-xl font-semibold md:text-2xl lg:hidden lg:text-3xl'>
          Personalised Individual Training
        </h3>
        <Image
          src={img2}
          placeholder='blur'
          quality={80}
          className='h-auto min-w-70 rounded-lg rounded-tl-4xl'
          alt='An individual attending a training'
        />
        <div className='space-y-4 lg:space-y-5'>
          <h3 className='hidden text-xl font-semibold md:text-2xl lg:block lg:text-3xl'>
            Personalised Individual Training
          </h3>
          <p className='text-primary-950/60 text-base lg:text-lg'>
            Begin a journey of lifelong learning and professional development
            with Tobams Group's diverse range of training programs for
            individuals. From technical skills mastery to soft skills
            enhancement, our courses cover a wide spectrum of topics to meet the
            evolving needs of today's professionals.
          </p>
          <ul className='text-primary-950/60 gap-2'>
            <li className='flex items-center gap-2 text-base lg:text-lg'>
              <HiLightningBolt className='text-primary-800' />
              <span>Business Analysis</span>
            </li>
            <li className='flex items-center gap-2 text-base lg:text-lg'>
              <HiLightningBolt className='text-primary-800' />
              <span>Soft Skills Development</span>
            </li>
            <li className='flex items-center gap-2 text-base lg:text-lg'>
              <HiLightningBolt className='text-primary-800' />
              <span>Industry Specific Knowledge</span>
            </li>
            <li className='flex items-center gap-2 text-base lg:text-lg'>
              <HiLightningBolt className='text-primary-800' />
              <span>Technical Skills Enhancement</span>
            </li>
            <li className='flex items-center gap-2 text-base lg:text-lg'>
              <HiLightningBolt className='text-primary-800' />
              <span>Time Management and Productivity</span>
            </li>
            <li className='flex items-center gap-2 text-base lg:text-lg'>
              <HiLightningBolt className='text-primary-800' />
              <span>Career Development</span>
            </li>
          </ul>
        </div>
      </div>

      <div className='grid items-center justify-center gap-6 md:gap-12 lg:grid-cols-2 lg:gap-16'>
        <h3 className='text-xl font-semibold md:text-2xl lg:hidden lg:text-3xl'>
          Capacity Development
        </h3>
        <Image
          src={img3}
          placeholder='blur'
          quality={80}
          className='h-auto min-w-70 rounded-lg rounded-tl-4xl lg:order-2'
          alt='An individual taking a group of coorporate people how to grow'
        />
        <div className='space-y-4 lg:space-y-5'>
          <h3 className='hidden text-xl font-semibold md:text-2xl lg:block lg:text-3xl'>
            Capacity Development
          </h3>
          <p className='text-primary-950/60 text-base lg:text-lg'>
            At Tobams Group, we empower individuals and organizations through
            tailored training programs, expert-led workshops, and personalized
            mentorship. We are committed to your success and growth. We are
            dedicated to providing a comprehensive suite of benefits designed to
            foster your development and success:
          </p>
          <ul className='text-primary-950/60 gap-2'>
            <li className='flex items-center gap-2 text-base lg:text-lg'>
              <HiLightningBolt className='text-primary-800' />
              <span>Tailored Training Programs</span>
            </li>
            <li className='flex items-center gap-2 text-base lg:text-lg'>
              <HiLightningBolt className='text-primary-800' />
              <span>Expert-Led Workshops</span>
            </li>
            <li className='flex items-center gap-2 text-base lg:text-lg'>
              <HiLightningBolt className='text-primary-800' />
              <span>Personalized Mentorship</span>
            </li>
            <li className='flex items-center gap-2 text-base lg:text-lg'>
              <HiLightningBolt className='text-primary-800' />
              <span>Technical Skills Enhancement</span>
            </li>
            <li className='flex items-center gap-2 text-base lg:text-lg'>
              <HiLightningBolt className='text-primary-800' />
              <span>Collaborative Learning Environment</span>
            </li>
            <li className='flex items-center gap-2 text-base lg:text-lg'>
              <HiLightningBolt className='text-primary-800' />
              <span>Ongoing Support and Resources</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
