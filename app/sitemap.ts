import { site } from "@/lib/site";

export default function sitemap() {
  const routes = ["", "/what-we-do", "/how-we-do-it", "/who-we-work-with", "/bio", "/contact"];
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));
}
