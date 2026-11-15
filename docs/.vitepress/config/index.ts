import { defineConfig } from 'vitepress'
import { nolebase } from './nolebase'
import { withSidebar } from 'vitepress-sidebar';

const vitePressOptions = {
  ...nolebase,

  title: "Color Wiki",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Rust', link: '/rust/' },
      { text: 'Linux', link: '/linux/' },
      { text: 'Android', link: '/android/' },
      { text: 'About', link: '/about' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/flakes-ink' }
    ]
  }
}


export default defineConfig(withSidebar(vitePressOptions, [
  {
    documentRootPath: 'docs',
    scanStartPath: 'rust',
    basePath: '/rust/',
    resolvePath: '/rust/',
    useTitleFromFileHeading: true,
    useFolderTitleFromIndexFile: true,
    manualSortFileNameByPriority: ['index.md']
  },
  {
    documentRootPath: 'docs',
    scanStartPath: 'linux',
    resolvePath: '/linux/',
    useTitleFromFrontmatter: true
  }
]))