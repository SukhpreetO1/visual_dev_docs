import { redirect } from 'next/navigation';

// Root / redirects to (marketing)/page.tsx which handles the full landing page
export default function RootPage() {
  redirect('/home');
}
