import Header from '@/components/layout/Header';
import PageNavigationViewBar from '@/components/layout/PageNavigationViewBar';
import Sidebar from '@/components/layout/Sidebar';

export default function DocLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen">
      <Header />
      <PageNavigationViewBar />

      <div className="flex h-[calc(100vh-107px)] md:h-[calc(100vh-69px)]">
        <Sidebar />

        <div className="flex-1 overflow-y-auto">
          <div className="p-4 py-14">
            <div className="mx-auto max-w-250">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
