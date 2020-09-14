
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },

      { name:'theme-color', content: '#ffffff' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
      { rel:'manifest', href:'/site.webmanifest' },
      { rel:'icon', type:'image/png', sizes:'16x16', href:'/favicon-16x16.png' },
      { rel:'icon', type:'image/png', sizes:'32x32', href:'/favicon-32x32.png' },
      { rel:'apple-touch-icon', sizes:'76x76', href:'/apple-touch-icon.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '@/plugins/vue-masonry-css.js'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/svg',
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-webfontloader',
    '@nuxt/content',
  ],

  webfontloader: {
    google: {
      families: ['Inter:400,500,700', 'Eczar:500,600,700']
    }
  },

  content: {
    // @nuxt/content options
  },

  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
