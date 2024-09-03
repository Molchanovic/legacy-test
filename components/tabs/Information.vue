<script lang="ts" setup>
interface IProps {
  count: string
  reviews: string
}

const props = defineProps<IProps>()
</script>

<template>
  <div class="info-block flex-row">
    <div class="info-block__item flex-row">
      <svg class="icon">
        <use xlink:href="@/assets/sprite.svg#check" />
      </svg>
      <span>Документы проверены</span>
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
@import '@/assets/style/variables.scss';
.info-block {
  gap: 6px;

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
  }

  @media (max-width: $mxs) {
    display: none;
  }
}
</style>
