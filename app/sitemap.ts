import { site } from "@/lib/site";

export default function sitemap() {
  const routes = [
    "",
    "/what-we-do",
    "/executive-communication-coaching",
    "/media-training",
    "/crisis-communications",
    "/pricing",
    "/how-we-do-it",
    "/what-sets-us-apart",
    "/who-we-work-with",
    "/bio",
    "/contact",
  ];

  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));
}
