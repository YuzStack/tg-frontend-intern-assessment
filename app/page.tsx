import CTABanner from '@/components/CTABanner';
import Hero from '@/components/Hero';
import Lms from '@/components/Lms';
import ManagementDev from '@/components/ManagementDev';
import PreFooter from '@/components/PreFooter';
import Testimonials from '@/components/Testimonials';
import TrainingConsultant from '@/components/TrainingConsultant';
import Trainings from '@/components/Trainings';
import TransformationHub from '@/components/TransformationHub';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Lms />
      <Trainings />
      <ManagementDev />
      <TransformationHub />
      <TrainingConsultant />
      <CTABanner />
      <Testimonials />
      <PreFooter />
    </>
  );
}
