export default function sitemap() {
  const domain = 'lalocandadelmare.it';

  return [
    {
      url: `https://${domain}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
  ];
}
