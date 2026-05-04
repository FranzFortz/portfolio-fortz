import type { Metadata } from "next";
import { siteConfig } from "@/site.config";

type PageMeta = {
  title: string;
  description: string;
  path: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
}: PageMeta): Metadata {
  const pageTitle = `${title} · ${siteConfig.name}`;
  const canonical = new URL(path || "/", siteConfig.url).toString();

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: pageTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
    },
  };
}
