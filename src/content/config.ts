import { defineCollection, z } from "astro:content";

// Define schemas for each content type
const workSchema = z.object({
    company: z.string(),
    href: z.string().url(),
    badges: z.array(z.string()),
    location: z.string(),
    title: z.string(),
    logoUrl: z.string(),
    start: z.string(),
    end: z.string(),
    description: z.string(),
});

const educationSchema = z.object({
    school: z.string(),
    href: z.string().url(),
    degree: z.string(),
    logoUrl: z.string(),
    start: z.string(),
    end: z.string(),
});

const projectSchema = z.object({
    title: z.string(),
    href: z.string().url(),
    dates: z.string(),
    active: z.boolean(),
    description: z.string(),
    technologies: z.array(z.string()),
    links: z.array(
        z.object({
            type: z.string(),
            href: z.string().url(),
            icon: z.string(),
        })
    ),
    image: z.string(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
});

const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    draft: z.boolean().optional(),
    featured: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
});

const profileSchema = z.object({
    name: z.string(),
    tagline: z.string(),
    initials: z.string(),
    url: z.string().url(),
    resumeUrl: z.string().url(),
    location: z.object({
        country: z.object({
            code: z.string(),
            name: z.string(),
            flag: z.string(),
        }),
        city: z.string(),
        link: z.string().url(),
    }),
    description: z.string(),
    summary: z.string(),
    avatarUrl: z.string(),
    skills: z.array(z.string()),
    navbar: z.array(
        z.object({
            href: z.string(),
            icon: z.any(),
            label: z.string(),
        })
    ),
    contact: z.object({
        email: z.string().email(),
        tel: z.string(),
        social: z.record(
            z.object({
                name: z.string(),
                url: z.string().url(),
                icon: z.string(),
                navbar: z.boolean(),
            })
        ),
    }),
    testimonials: z.array(
        z.object({
            quote: z.string(),
            name: z.string(),
            designation: z.string(),
            src: z.string(),
        })
    ),
});

export const collections = {
    work: defineCollection({ type: "data", schema: workSchema }),
    education: defineCollection({ type: "data", schema: educationSchema }),
    projects: defineCollection({ type: "content", schema: projectSchema }),
    blog: defineCollection({ type: "content", schema: blogSchema }),
    profile: defineCollection({ type: "data", schema: profileSchema }),
};
