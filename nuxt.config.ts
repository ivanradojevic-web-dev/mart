// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt', 
    '@nuxtjs/supabase', 
    '@vee-validate/nuxt'
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
    }
})
