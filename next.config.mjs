import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
    // Site images (icons, logo, hero, blog covers) are essentially static —
    // long cache lifetime avoids Next's 60s default, which Lighthouse flags
    // as an inefficient cache lifetime on repeat views.
    minimumCacheTTL: 31536000,
  },
  turbopack: {
    root: __dirname,
  },
  async headers() {
    return [
      {
        // Static assets served directly from /public (not through the image
        // optimizer) — same reasoning as minimumCacheTTL above.
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
  async redirects() {
    return [];
  },
};

export default nextConfig;
