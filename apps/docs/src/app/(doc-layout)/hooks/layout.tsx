import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'kitzo • Hooks',
};

export default function HooksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
