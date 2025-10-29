'use client';

import { ReactNode } from 'react';

interface PhoneClickTrackerProps {
  children: ReactNode;
  location: string;
}

export default function PhoneClickTracker({ children, location }: PhoneClickTrackerProps) {
  const handleClick = (e: React.MouseEvent) => {
    // Track phone click in GTM dataLayer
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'phone_click',
        button_location: location,
        conversion_method: 'phone',
        conversion_action: 'click_to_call'
      });
    }
  };

  return (
    <div onClick={handleClick}>
      {children}
    </div>
  );
}
