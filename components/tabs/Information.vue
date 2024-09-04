<script lang="ts" setup>
interface IProps {
  is_verified?: boolean
  is_mobile_device?: boolean
  count: string
  reviews: string
}

defineProps<IProps>()
</script>

<template>
  <div class="info-block flex-row">
    <div
      v-if="is_verified"
      class="info-block__item flex-row"
    >
      <svg class="icon">
        <use xlink:href="@/assets/sprite.svg#check" />
      </svg>
      <span v-if="is_mobile_device">Проверен</span>
      <span v-else>Документы проверены</span>
    </div>
    <div class="info-block__item flex-row">
      <svg class="icon">
        <use xlink:href="@/assets/sprite.svg#star" />
      </svg>
      <span>{{ count }}</span>
    </div>
    <div class="info-block__item">
      <span>{{ reviews }} отзывов</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/variables';
@import '@/assets/style/mixins';
.info-block {
  gap: 6px;
  @include fslh(15, 20);

  &__item {
    &::after {
      content: '';
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: $color-text;
      margin-left: 6px;
    }

    .icon {
      width: 16px;
      height: 16px;
      margin-right: 5px;
    }

    span {
      white-space: nowrap;
    }
  }
}
</style>
