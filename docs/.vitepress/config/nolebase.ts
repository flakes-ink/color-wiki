import { defineConfig } from 'vitepress'

import {
    InlineLinkPreviewElementTransform
} from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it'

export const nolebase = defineConfig({
    markdown: {
        config(md) {
            md.use(InlineLinkPreviewElementTransform)
        }
    },

    vite: {
        optimizeDeps: {
            exclude: [
                '@nolebase/*',
                'vitepress',
            ]
        },
        ssr: {
            noExternal: [
                '@nolebase/*',
            ]
        },
    }
})