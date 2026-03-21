import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'kitzo • Components',
};

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
