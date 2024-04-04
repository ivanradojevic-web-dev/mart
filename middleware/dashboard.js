export default defineNuxtRouteMiddleware((to, from) => {
    const user = useSupabaseUser()

    if (!user.value && to.fullPath == '/dashboard') {
        return navigateTo('/login')
    }
})
