// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    devtools: { enabled: true },
    modules: [
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxtjs/supabase',
        '@vee-validate/nuxt',
        '@unlok-co/nuxt-stripe'
    ],
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    supabase: {
        redirect: false
    },
    stripe: {
        server: {
            key: process.env.STRIPE_SERVER_KEY,
            options: {
                apiVersion: '2022-11-15'
            }
        },
        client: {
            key: process.env.STRIPE_CLIENT_KEY,
            options: {
                // Client-side Stripe options
            }
        }
    }
})
