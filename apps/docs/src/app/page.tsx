import HomeFooter from '@/components/home/HomeFooter';
import ClosingSection from '@/components/home/sections/ClosingSection';
import FeaturedPreviewSection from '@/components/home/sections/FeaturedPreviewSection';
import HeroSection from '@/components/home/sections/HeroSection';
import HomeHeader from '@/components/home/header/HomeHeader';
import PhilosophySection from '@/components/home/sections/PhilosophySection';
import ToasterSubscriber from '@/components/home/ToasterSubscriber';

import { ModernBackground } from '@/components/layout/ModernBackground';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen">
      <ModernBackground />

      <div className="relative z-10">
        <HomeHeader />

        <div className="px-4 md:px-6">
          <main className="mx-auto max-w-300 py-24">
            <HeroSection />
            <PhilosophySection />
            <FeaturedPreviewSection />
            <ClosingSection />
          </main>
        </div>

        <HomeFooter />
      </div>

      <ToasterSubscriber />
    </div>
  );
}
