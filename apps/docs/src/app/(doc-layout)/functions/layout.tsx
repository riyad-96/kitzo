import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'kitzo • Functions',
};

export default function FunctionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
