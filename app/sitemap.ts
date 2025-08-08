import type { MetadataRoute } from "next";
import { STATIC_VARIABLE_IDS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://bcravivo.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 1.0,
    },
    {
      url: "https://bcravivo.vercel.app/acciones",
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 0.9,
    },
    {
      url: "https://bcravivo.vercel.app/carry-trade",
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 0.9,
    },
    {
      url: "https://bcravivo.vercel.app/bonos-duales",
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 0.8,
    },
    {
      url: "https://bcravivo.vercel.app/fija",
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 0.8,
    },
    {
      url: "https://bcravivo.vercel.app/variables",
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 0.7,
    },
    {
      url: "https://bcravivo.vercel.app/calculadora-de-inflacion",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "https://bcravivo.vercel.app/central-de-deudores",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    // Static variable pages
    ...STATIC_VARIABLE_IDS.map((id) => ({
      url: `https://bcravivo.vercel.app/variables/${id}`,
      lastModified: new Date(),
      changeFrequency: "hourly" as const,
      priority: 0.7,
    })),
  ];
}
