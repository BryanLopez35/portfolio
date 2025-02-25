import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://bryancode.dev',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }

  ];
}
