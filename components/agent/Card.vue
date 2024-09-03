<script lang="ts" setup>
interface IProps {
  name: string
  description: string
  image_path: string
  rating_count: string
  rating_reviews: string
}

const props = defineProps<IProps>()
</script>

<template>
  <q-card
    class="agent-card"
    flat
    bordered
  >
    <q-card-section class="agent-card__wrapper flex-row">
      <div class="agent-card__image">
        <NuxtImg :src="image_path" />
      </div>

      <div class="agent-card__info">
        <h2 class="agent-card__title">
          {{ name }}
        </h2>
        <TabsInformation
          class="agent-card__information"
          :count="rating_count"
          :reviews="rating_reviews"
        />
        <div class="agent-card__text">
          {{ description }}
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style lang="scss" scoped>
.agent-card {
  max-width: 560px;
  width: fit-content;
  border-radius: 20px;
  &__wrapper {
    gap: 20px;
    padding: 20px;
  }

  &__image {
    flex: 0 0 140px;
    height: 140px;
    border-radius: 20px;
    overflow: hidden;
  }

  &__information {
    margin-bottom: 14px;
  }

  &__info {
  }

  &__title {
    margin-bottom: 4px;
  }

  &__text {
    -webkit-line-clamp: 3;
    line-clamp: 3;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>
