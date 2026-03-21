import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'kitzo • Getting started',
};

export default function GettingStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
