<script lang="ts" setup>
interface IProps {
  is_verified_agent: boolean
  name: string
  description: string
  image_path: string
  rating_count: string
  rating_reviews: string
}
defineProps<IProps>()
const viewport = useViewport()
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
          :is_verified="is_verified_agent"
          :is_mobile_device="viewport.isLessThan('tablet')"
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
  @import '@/assets/style/variables';
  @import '@/assets/style/mixins';
  max-width: 560px;
  width: fit-content;
  border-radius: 20px;
  background: $color-footer;
  border: none;

  @media (max-width: $msm) {
    width: 100%;
  }

  &__wrapper {
    gap: 20px;
    padding: 20px;
    position: relative;
    overflow: hidden;

    @media (max-width: $msm) {
      padding: 16px;
    }
  }

  &__image {
    flex: 0 0 140px;
    height: 140px;
    border-radius: 20px;
    overflow: hidden;

    @media (max-width: $msm) {
      flex: 0 0 48px;
      height: 48px;
      border-radius: 10px;
      position: absolute;
      top: 16px;
      left: 16px;
    }
  }

  &__information {
    margin-bottom: 14px;
    @media (max-width: $msm) {
      padding-left: 60px;
      margin-bottom: 8px;
    }
  }

  &__title {
    margin-bottom: 2px;
    @include fslh(24, 28);

    @media (max-width: $msm) {
      @include fslh(20, 24);
      padding-left: 60px;
    }
  }

  &__text {
    -webkit-line-clamp: 3;
    line-clamp: 3;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media (max-width: $msm) {
      -webkit-line-clamp: 4;
      line-clamp: 4;
    }
  }
}
</style>
