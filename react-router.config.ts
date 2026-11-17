import type { Config } from "@react-router/dev/config";

export default {
  ssr: true,
  // Required by @cloudflare/vite-plugin (Vite Environment API).
  future: { v8_viteEnvironmentApi: true },
} satisfies Config;
