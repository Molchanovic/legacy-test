<script lang="ts" setup>
import { agentsApi } from '@/api'

definePageMeta({
  layout: 'default',
})

const { data: data } = await useFetch(agentsApi)
</script>

<template>
  <div class="container">
    <section class="section agents">
      <div class="agents-wrapper flex-row">
        <AgentCard
          v-for="agent of data"
          :key="agent.id"
          :name="agent.name"
          :description="agent.description"
          :image_path="agent.image"
          :rating_count="agent?.rating?.count"
          :rating_reviews="agent?.rating?.reviews"
        />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.agents {
}
.agents-wrapper {
  flex-direction: column;
  gap: 12px;
}
</style>
