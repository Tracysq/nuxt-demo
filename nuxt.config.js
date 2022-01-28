process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-demo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
    '~/plugins/api',
    {src: '~/plugins/vue-html-pdf.js', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/apollo'
  ],


  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost',
    proxy: true
  },

  proxy: {
    '/todos/': {
      target: 'https://jsonplaceholder.typicode.com',
      secure: false,
      changeOrigin: true
    },
    '/api/': {
      target: 'https://localhost',
      secure: false,
      changeOrigin: true
    },
    '/ws/': {
      target: 'wss://nginx',
      secure: false,
      changeOrigin: true,
      ws: true
    },
  },

  apollo: {
    clientConfigs: {
      default: {
        // httpEndpoint: 'https://jsonplaceholder.typicode.com/users',
        skipSSLValidation: true,
        httpEndpoint: 'https://localhost/api/graphql',
        // wsEndpoint: `wss://nginx/ws/subscribe`,
        httpLinkOptions: {
          credentials: 'same-origin'
        }
        // httpEndpoint: 'https://api.graph.cool/simple/v1/cj1dqiyvqqnmj0113yuqamkuu',
        // browserHttpEndpoint: 'http://localhost:8001/graphql',
      }
    }
  },

  server: {
    port: 8001
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    }
  }
}
