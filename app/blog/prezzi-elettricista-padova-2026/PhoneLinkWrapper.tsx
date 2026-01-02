'use client';

import PhoneLink from '@/app/components/PhoneLink';

export default function PhoneLinkWrapper() {
  return (
    <PhoneLink phone="+393519898686" location="blog_post" className="btn-accent text-xl py-4 px-10">
      Chiama: 351 989 8686
    </PhoneLink>
  );
}
