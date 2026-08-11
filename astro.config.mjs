import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const owner = process.env.GITHUB_REPOSITORY?.split('/')[0] ?? 'gerardo-nanoderma';
const isUserOrOrgPagesRepo = repository.endsWith('.github.io');

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), react()],
    site: `https://${owner}.github.io`,
    base: repository && !isUserOrOrgPagesRepo ? `/${repository}/` : '/',
});
