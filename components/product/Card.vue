<script lang="ts" setup>
interface Props {
  name: string
  price: string
  image_path: string
  views: string
  time: string
  is_hide: boolean
}

const props = defineProps<Props>()
const formatPrice = computed(() =>
  props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '),
)
</script>

<template>
  <q-card
    class="product-card"
    flat
    bordered
  >
    <div class="product-card__tickets flex-row">
      <div class="product-card__ticket flex-row">
        <svg class="icon">
          <use xlink:href="@/assets/sprite.svg#eye" />
        </svg>
        <span class="product-card__ticket-text">{{ views }}</span>
      </div>
      <div class="product-card__ticket flex-row">
        <svg class="icon">
          <use xlink:href="@/assets/sprite.svg#calendar" />
        </svg>
        <span class="product-card__ticket-text">{{ time }} дня</span>
      </div>
    </div>
    <div class="product-card__image q--avoid-card-border">
      <NuxtImg :src="image_path" />
    </div>

    <q-card-section class="product-card__body">
      <p class="product-card__price">
        {{ formatPrice }}
        ₽
      </p>
      <h3 class="product-card__name">
        {{ name }}
      </h3>
    </q-card-section>

    <q-card-actions
      v-if="!is_hide"
      class="product-card__footer"
    >
      <span class="product-card__add-views"
        >Увеличьте количество просмотров</span
      >
      <q-btn
        class="btn product-card__btn"
        label="Продвигать"
        no-caps
      />
    </q-card-actions>

    <q-card-actions
      v-else
      class="product-card__footer"
    >
      <div class="product-card__close">Объявление скрыто</div>
    </q-card-actions>
  </q-card>
</template>

<style lang="scss" scoped>
@import '@/assets/style/variables';
@import '@/assets/style/mixins';
.product-card {
  display: flex;
  flex-direction: column;
  border-radius: 28px;
  background: #fff;
  position: relative;
  overflow: hidden;
  padding: 8px 8px 12px 8px;
  &__price {
    @include fslh(17, 20);
    font-weight: 500;
    margin-bottom: 12px;
  }

  &__name {
    @include fslh(15, 24);
    font-weight: 500;
    margin-bottom: 10px;
  }

  &__image {
    border-radius: 20px;
    overflow: hidden;
    height: 320px;
    width: 100%;
    margin-bottom: 16px;

    .q-img {
      height: 100%;
    }
  }

  &__body {
    padding: 0;
  }

  &__tickets {
    position: absolute;
    top: 16px;
    left: 16px;
    gap: 4px;
    z-index: 2;
  }

  &__close {
    width: 100%;
    color: $color-red;
    text-align: center;
  }

  &__ticket {
    padding: 8px;
    gap: 10px;
    border-radius: 12px;
    background-color: $color-ticket;
    color: #fff;
    @include fslh(13, 20);

    &:nth-child(1) {
      .icon {
        width: 22px;
        height: 15px;
      }
    }

    &:nth-child(2) {
      .icon {
        width: 18px;
        height: 20px;
      }
    }
  }

  &__footer {
    justify-content: space-between;
    border-top: 1px solid $color-grey;
    padding: 12px 4px 0px 4px;
    flex: 1 1 auto;
    gap: 10px;

    @media (max-width: $mxs) {
      flex-wrap: nowrap;
    }
  }

  &__add-views {
    @include fslh(13, 18);
  }

  &__btn {
    background-color: $color-green;
    padding: 8px 12px;
    border-radius: 12px;
    color: $color-footer;
    @include fslh(15, 24);
  }
}
</style>
