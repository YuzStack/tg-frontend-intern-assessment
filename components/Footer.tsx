import Image from 'next/image';
import brandLogo from '@/public/brand-logo.png';
import Instagram from './icons/Instagram';
import LinkedIn from './icons/LinkedIn';
import X from './icons/X';
import Mail from './icons/Mail';
import Call from './icons/Call';

export default function Footer() {
  return (
    <footer className='bg-primary-900 text-primary-50 divide-primary-50/10 divide-y p-6 md:px-12 md:py-8 lg:px-16'>
      {/* About */}
      <div className='flex flex-col gap-5 py-5 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-5'>
        <div className='max-w-100 space-y-6'>
          <Image src={brandLogo} alt='Tobbams Group' width={166} height={70} />
          <p className='text-sm md:text-base'>
            Tobams Group is an innovative consultancy firm reshaping the future
            of tech talent development in Africa, specializing in talent
            acquisition, internships, and skill development with a global
            perspective.
          </p>
          <div className='flex items-center gap-5'>
            <a href='#'>
              <div className='bg-primary-50 flex size-10 items-center justify-center rounded-full'>
                <LinkedIn className='text-primary-950 h-4.5 w-5' />
              </div>
            </a>
            <a href='#'>
              <div className='bg-primary-50 flex size-10 items-center justify-center rounded-full'>
                <Instagram className='text-primary-950 size-5' />
              </div>
            </a>
            <a href='#'>
              <div className='bg-primary-50 flex size-10 items-center justify-center rounded-full'>
                <X className='text-primary-950 h-5 w-5.5' />
              </div>
            </a>
          </div>
        </div>

        <div className='space-y-4'>
          <h3 className='text-lg font-bold md:text-xl'>What We Do</h3>
          <ul className='flex flex-col gap-3'>
            <li className='text-sm md:text-base'>Sustainability Services</li>
            <li className='text-sm md:text-base'>
              Strategy Planning and Implementation
            </li>
            <li className='text-sm md:text-base'>Tech Talent Solutions</li>
            <li className='text-sm md:text-base'>Training and Development</li>
            <li className='text-sm md:text-base'>IT Consulting Services</li>
            <li className='text-sm md:text-base'>Social Impact</li>
          </ul>
        </div>

        <div className='space-y-4'>
          <h3 className='text-lg font-bold md:text-xl'>Company</h3>
          <ul className='flex flex-col gap-3'>
            <li className='text-sm md:text-base'>About</li>
            <li className='text-sm md:text-base'>Jobs</li>
            <li className='text-sm md:text-base'>Projects</li>
            <li className='text-sm md:text-base'>Our Founder</li>
            <li className='text-sm md:text-base'>Business Model</li>
            <li className='text-sm md:text-base'>The Team</li>
            <li className='text-sm md:text-base'>Contact Us</li>
            <li className='text-sm md:text-base'>Blog</li>
            <li className='text-sm md:text-base'>FAQs</li>
            <li className='text-sm md:text-base'>Testimonials</li>
          </ul>
        </div>

        <div className='space-y-4'>
          <h3 className='text-lg font-bold md:text-xl'>Solution</h3>
          <ul className='flex flex-col gap-3'>
            <li className='text-sm md:text-base'>Tobams Group Academy</li>
            <li className='text-sm md:text-base'>Help a Tech Talent</li>
            <li className='text-sm md:text-base'>Campus Ambassadors Program</li>
            <li className='text-sm md:text-base'>Join Our Platform</li>
            <li className='text-sm md:text-base'>Pricing</li>
            <li className='text-sm md:text-base'>Book a Consultation</li>
            <li className='text-sm md:text-base'>Join Our Slack Community</li>
          </ul>
        </div>
      </div>

      {/* Contact Info */}
      <div className='py-5'>
        <div className='bg-primary-700 md:divide-primary-50/10 flex flex-col gap-6.5 rounded-lg p-4 md:flex-row md:divide-x'>
          <div className='order-2 space-y-4.5 md:order-1 md:flex-1 md:px-6'>
            <h3 className='text-lg font-bold md:text-xl'>Registered Offices</h3>
            <div className='md:divide-primary-50/10 grid gap-4.5 md:grid-cols-2 md:divide-x'>
              <address className='text-sm font-semibold not-italic md:pr-6 md:text-base'>
                <span className='text-accent'>United Kingdom</span>
                <br /> 07451196 (Registered by Company House)
                <br />
                Vine Cottages, 215 North Street, Romford,
                <br />
                Essex, United Kingdom, RM1 4QA
              </address>
              <address className='text-sm font-semibold not-italic md:px-6 md:text-base'>
                <span className='text-accent'>Nigeria</span>
                <br /> RC 1048722 (Registered by the Corporate Affairs
                Commission)
                <br /> 4, Muaz Close, Angwari-Rimi
              </address>
            </div>
          </div>

          <div className='space-y-4 md:order-2 md:px-6'>
            <h3 className='text-lg font-bold md:text-xl'>
              Contact Information
            </h3>
            <div className='space-y-3'>
              <a
                href='mailto:theteam@tobamsgroup.com'
                className='flex items-center gap-4.5 text-sm md:text-base'
              >
                <Mail className='text-accent h-4 w-5' />
                <span>theteam@tobamsgroup.com</span>
              </a>
              <a href='tel:+447886600748' className='flex items-center gap-4.5'>
                <Call className='text-accent size-6 text-sm md:text-base' />
                <span>+447886600748</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links and Copyright */}
      <div className='flex flex-col gap-3 pt-5 text-sm font-light md:flex-row md:items-center md:justify-between md:text-base'>
        <p className='order-2 text-center md:order-1'>
          Copyright ⓒ Tobams Group, {new Date().getFullYear()}. All rights
          reserved.
        </p>
        <ul className='flex flex-wrap justify-center gap-x-6 gap-y-3 md:order-2 md:gap-x-8 md:gap-y-4 lg:gap-10'>
          <li>
            <a href='#' className='py-2 underline'>
              Privacy Policy
            </a>
          </li>
          <li>
            <a href='#' className='py-2 underline'>
              Cookies Policy
            </a>
          </li>
          <li>
            <a href='#' className='py-2 underline'>
              Terms and Conditions
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
