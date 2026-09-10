import Hero from '@/components/Hero';
import Lms from '@/components/Lms';
import ManagementDev from '@/components/ManagementDev';
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
    </>
  );
}
