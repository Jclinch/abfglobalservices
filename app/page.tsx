//app\page.tsx
import Hero from '@/components/Hero';
import WhatsAppButton from '@/components/WhatsAppButton';
import MissionVisionServices from '@/components/MissionVisionServices';
import StatsAndLoan from '@/components/Stats';
import Testimonials from '@/components/Testimonials';

export default function HomePage() {
  return (
    <>
      <main>
        <div className="">
         <Hero />
        </div>
        <MissionVisionServices />
        <StatsAndLoan />
        <Testimonials />
        {/* Other components can be added here */}
        <WhatsAppButton />
      </main>
    </>
  );
}
