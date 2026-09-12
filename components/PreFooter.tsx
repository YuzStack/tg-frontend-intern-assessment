export default function PreFooter() {
  return (
    <section className='border-primary-50/50 bg-primary-800 text-primary-50 mt-6 flex flex-col gap-6 border-b p-6 px-12 md:flex-row md:items-center md:justify-around md:py-8 lg:px-16 lg:py-10'>
      <div className='space-y-2.5'>
        <p className='text-sm md:text-base lg:text-lg'>
          Ready to be a part of something extraordinary?
        </p>
        <p className='text-xl font-semibold md:text-2xl lg:text-3xl'>
          Let&apos;s work together to create a difference
        </p>
      </div>
      <button className='btn-primary'>Get In Touch</button>
    </section>
  );
}
