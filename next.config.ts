import type { NextConfig } from "next";
import { existsSync } from "fs";
import { dirname, join } from "path";

// Git worktree (.claude/worktrees/...) esetén a node_modules a fő
// checkoutban van, a Turbopack pedig nem lép ki a project rootból.
// Több package-lock.json miatt a root-kitalálás is a fő repóra esne,
// és annak az app/ mappáját szolgálná ki. Ezért a Turbopack rootot
// arra az ősmappára állítjuk, amelyik a valódi node_modules-t
// tartalmazza: worktree-ből ez a fő repo (abban van a worktree is),
// önálló checkoutból pedig saját maga.
function findProjectRoot(start: string): string {
  let dir = start;
  while (!existsSync(join(dir, "node_modules", "next"))) {
    const parent = dirname(dir);
    if (parent === dir) return start;
    dir = parent;
  }
  return dir;
}

const nextConfig: NextConfig = {
  turbopack: { root: findProjectRoot(process.cwd()) },
  images: {
    localPatterns: [
      {
        // public/ assets; search omitted → ?v= cache-bust query params allowed
        pathname: '/**',
      },
    ],
    remotePatterns: [
      { protocol: 'https', hostname: 'dev.weart.hu' },
      { protocol: 'https', hostname: 'secure.gravatar.com' },
      { protocol: 'https', hostname: '*.gravatar.com' },
    ],
  },
};

export default nextConfig;
