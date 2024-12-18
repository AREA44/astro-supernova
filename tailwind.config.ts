import starlightPlugin from '@astrojs/starlight-tailwind';
import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: colors.indigo,
        gray: colors.zinc,
      },
    },
  },
  plugins: [starlightPlugin()],
};

export default config;
