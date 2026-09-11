export default function CTABanner() {
  return (
    <section className='px-6'>
      <div className='bg-primary-500 space-y-8 rounded-lg px-6 py-8 md:mx-auto md:max-w-[70vw] md:px-12 lg:px-16'>
        <p className='text-primary-50 text-center font-semibold'>
          <span className='hidden md:block md:text-lg'>
            Want to accelerate professional growth and development at your
            organisation? <br /> See how we can help.
          </span>
          <span className='md:hidden'>
            Don't just dream it—let's build it! Click now and start your project
            with Tobams Group. Your journey to digital excellence begins here.
          </span>
        </p>
        <button className='btn-primary bg-primary-50 text-primary-500 border-primary-500 mx-auto border'>
          Book a Consultation
        </button>
      </div>
    </section>
  );
}
