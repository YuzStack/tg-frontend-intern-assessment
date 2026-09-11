import { MdArrowOutward } from 'react-icons/md';

export default function TrainingConsultant() {
  return (
    <section className='bg-secondary-200 py-5 md:py-8 lg:py-10'>
      <div className='bg-primary-100 space-y-5 p-6 sm:p-8 md:p-12 lg:p-16'>
        <div className='text-primary-500 space-y-3'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
            Training The Consultant
          </h2>
          <h3 className='text-base font-semibold md:text-lg'>
            Maximise Your Potential as a Certified Trainer:
          </h3>
        </div>
        <p className='text-primary-950 text-sm sm:text-base md:text-lg'>
          With the help of our Training Consultants program, take a
          revolutionary step toward becoming a distinguished certified training
          consultant. Learn from professionals in the field, immerse yourself in
          a thorough curriculum, and hone your training methods through
          interactive workshops. Participating in our program will enable you to
          gain expertise in diverse courses while also developing the abilities
          to mentor and encourage others in their career advancement.
        </p>
        <div className='bg-primary-500 text-primary-50 grid gap-5 rounded-lg p-6 lg:grid-cols-2'>
          <div className='space-y-3'>
            <h4 className='font-bold md:text-lg'>Expert-Led Learning</h4>
            <p className='text-sm sm:text-base md:text-lg'>
              Gain insight from seasoned professionals in the field as they
              mentor you through the subtleties of business analysis.
            </p>
          </div>
          <div className='space-y-3'>
            <h4 className='font-bold md:text-lg'>Interactive Workshops</h4>
            <p className='text-sm sm:text-base md:text-lg'>
              Engage in hands-on workshops designed to enhance your training
              capabilities and provide practical insights.
            </p>
          </div>
          <div className='space-y-3'>
            <h4 className='font-bold md:text-lg'>Comprehensive Curriculum</h4>
            <p className='text-sm sm:text-base md:text-lg'>
              Access a robust curriculum that covers fundamental principles and
              advanced methodologies, ensuring a well-rounded understanding.
            </p>
          </div>
          <div className='space-y-3'>
            <h4 className='font-bold md:text-lg'>Global Recognition</h4>
            <p className='text-sm sm:text-base md:text-lg'>
              You will attain a globally recognized certification, opening doors
              to new career opportunities and industry recognition.
            </p>
          </div>
        </div>
        <button className='btn-primary'>
          <span>Learn More</span>
          <MdArrowOutward />
        </button>
      </div>
    </section>
  );
}
