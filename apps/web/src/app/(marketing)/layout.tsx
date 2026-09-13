import React from 'react';

// Marketing pages (landing, home) manage their own layout fully
// No shared header/footer here — the landing page has its own nav
export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
