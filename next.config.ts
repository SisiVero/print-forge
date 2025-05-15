import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   theme: {
    extend: {
      fontFamily: {
        albert: ['var(--font-albert)', 'sans-serif'],
        monst: ['var(--font-monst)', 'sans-serif'],
      },
    },
  },
};

export default nextConfig;
