export default function Hamburger() {
  return (
    <div className='bg-primary-500 flex size-9 flex-col items-center justify-center gap-1.5 rounded-md p-2 transition-all active:scale-90'>
      <span className='bar-top block h-0.5 w-5 rounded-full bg-white transition-all duration-300' />
      <span className='bar-mid block h-0.5 w-5 rounded-full bg-white transition-all duration-300' />
      <span className='bar-bot block h-0.5 w-5 rounded-full bg-white transition-all duration-300' />
    </div>
  );
}
