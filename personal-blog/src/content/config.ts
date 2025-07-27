import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string().default('Uncategorized'),
    author: z.string().default('Unknown'),
    readingTime: z.number().default(0),
  }),
});

export const collections = {
  'blog': blog,
}; 