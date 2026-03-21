import HomeFooter from '@/components/home/HomeFooter';
import ClosingSection from '@/components/home/sections/ClosingSection';
import FeaturedPreviewSection from '@/components/home/sections/FeaturedPreviewSection';
import HeroSection from '@/components/home/sections/HeroSection';
import HomeHeader from '@/components/home/header/HomeHeader';
import PhilosophySection from '@/components/home/sections/PhilosophySection';
import ToasterSubscriber from '@/components/home/ToasterSubscriber';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <HomeHeader />

      <div className="px-4 md:px-6">
        <main className="mx-auto max-w-300 py-20">
          <HeroSection />
          <PhilosophySection />
          <FeaturedPreviewSection />
          <ClosingSection />
        </main>
      </div>

      <HomeFooter />

      <ToasterSubscriber />
    </div>
  );
}
