import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import './globals.css';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800'],
  variable: '--font-nunito-sans',
});

export const metadata: Metadata = {
  title: 'Frontend Intern Assessment | Tobbams Group',
  description:
    'An assesment exercise for the position of Frontend Intern at Tobbams Group',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='en' className={`${nunitoSans.variable} h-full antialiased`}>
      <body className='flex min-h-full flex-col'>{children}</body>
    </html>
  );
}
