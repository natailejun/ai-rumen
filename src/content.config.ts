import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        series: z.string().optional(),
        seriesOrder: z.number().optional(),
        difficulty: z.enum(['beginner', 'intermediate', 'advanced']).default('beginner'),
        estimatedTime: z.string().optional(),
        prerequisites: z.array(z.string()).optional(),
        tools: z
          .array(
            z.object({
              name: z.string(),
              url: z.string().url().optional(),
            })
          )
          .optional(),
        screenshotCount: z.number().optional(),
        updatedAt: z.string().optional(),
        premium: z.boolean().default(false),
        premiumPrice: z.string().optional(),
      }),
    }),
  }),
};
