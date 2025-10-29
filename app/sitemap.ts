import { siteConfig } from '@/site.config';
import { blogPosts } from './blog/[slug]/page';

export default function sitemap() {
  const blogUrls = blogPosts.map((post) => ({
    url: `https://${siteConfig.domain}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: `https://${siteConfig.domain}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `https://${siteConfig.domain}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    ...blogUrls,
    {
      url: `https://${siteConfig.domain}/servizi/emergenza-24h`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `https://${siteConfig.domain}/servizi/riparazione-impianti`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `https://${siteConfig.domain}/servizi/installazione-impianti`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `https://${siteConfig.domain}/servizi/manutenzione-elettrica`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `https://${siteConfig.domain}/servizi/certificazione-impianti`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `https://${siteConfig.domain}/servizi/illuminazione`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `https://${siteConfig.domain}/servizi/quadri-elettrici`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `https://${siteConfig.domain}/servizi/domotica`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];
}
