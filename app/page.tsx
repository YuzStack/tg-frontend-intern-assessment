import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Lms from '@/components/Lms';
import ManagementDev from '@/components/ManagementDev';
import Trainings from '@/components/Trainings';
import TransformationHub from '@/components/TransformationHub';

export default function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Lms />
        <Trainings />
        <ManagementDev />
        <TransformationHub />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
