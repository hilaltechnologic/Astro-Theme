import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    image: z.string().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    readingTime: z.number().optional(),
  }),
});

export const collections = {
  'blog': blog,
}; 