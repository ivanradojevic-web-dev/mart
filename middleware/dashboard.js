export default defineNuxtRouteMiddleware((from, to) => {
    const user = useSupabaseUser()

    if (!user.value && to.fullPath == '/dashboard') {
        return navigateTo('/login')
    }
})
