export default function Hero() {
  return (
    <section className="text-primary-50 relative flex h-[70dvh] min-h-130 w-full items-center justify-center bg-[url('/bg-hero.jpg')] bg-cover bg-center bg-no-repeat p-4 text-center">
      <div className='absolute inset-0 bg-black/70' />
      <div className='z-10 flex flex-col items-center gap-6'>
        <div className='bg-primary-50/10 w-fit rounded-full px-8 py-2 text-sm uppercase'>
          What We Do
        </div>
        <h2 className='text-4xl font-bold md:text-6xl'>
          Training and Development
        </h2>
        <p className='max-w-[70vw] text-base font-semibold md:text-lg'>
          Our comprehensive range of programs and resources is designed to
          enhance skills, broaden knowledge, and propel careers forward in
          today's ever-evolving landscape.
        </p>
        <button className='btn-primary'>Book a Consultation</button>
      </div>
    </section>
  );
}
