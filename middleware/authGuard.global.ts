/* eslint-disable */
export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie('token')
  if (to.path === '/agents' && !token.value) {
    return navigateTo('/sign-in')
  }
  if (to.path === '/') {
    return navigateTo('/products')
  }
})
/* eslint-enable */
