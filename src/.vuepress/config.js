const { readdirSync } = require('fs')
const { description } = require('../../package')

const sprig = readdirSync(__dirname + '/../docs/sprig/').map((fileName) => "sprig/" + fileName)
console.log("sprig docs: " + JSON.stringify(sprig))

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'knit',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#29BEB0' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Install',
        link: '/docs/install/',
      },
      {
        text: 'Docs',
        link: '/docs/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/knitcodegen/knit'
      }
    ],
    sidebar: {
      '/docs/': [
        {
          title: 'Knit',
          collapsable: false,
          children: [
            'install',
            // 'getting-started',
            'options',
            'cli',
            'embedding',
          ]
        },
        {
          title: 'Sprig',
          collapsable: false,
          children: sprig
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
