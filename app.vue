<script lang="ts" setup>
const token = useCookie('token')
const authStore = useAuthStore()
authStore.setToken(token)
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
