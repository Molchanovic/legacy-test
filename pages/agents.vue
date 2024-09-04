<script lang="ts" setup>
import { agentsApi } from '@/api'

const authStore = useAuthStore()

definePageMeta({
  layout: 'default',
})

const data = await $fetch(agentsApi, {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${authStore.token}`,
  },
})
</script>

<template>
  <div class="container">
    <section class="section agents">
      <div class="agents-wrapper flex-row">
        <AgentCard
          v-for="agent of data"
          :key="agent?.id"
          :is_verified_agent="agent?.verified"
          :name="agent?.name"
          :description="agent?.description"
          :image_path="agent?.image"
          :rating_count="agent?.rating?.count"
          :rating_reviews="agent?.rating?.reviews"
        />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/variables';
.agents {
  @media (max-width: $msm) {
    padding-top: 24px;
  }
}
.agents-wrapper {
  padding-bottom: 64px;
  flex-direction: column;
  gap: 12px;

  @media (max-width: $msm) {
    padding-bottom: 48px;
  }
}
.container {
  @media (max-width: $msm) {
    padding: 0px;
  }
}
</style>
