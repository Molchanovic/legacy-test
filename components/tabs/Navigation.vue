<script lang="ts" setup>
import { ratingApi } from '@/api'

const { data: data } = await useFetch(ratingApi)
</script>

<template>
  <div class="legacy">
    <div class="legacy-wrapper flex-row">
      <div class="legacy-image">
        <NuxtImg src="/image/logo-cp.jpg" />
      </div>
      <h1 class="legacy-title">Наследие</h1>
      <TabsInformation
        :is_verified="true"
        class="legacy-info-block"
        :count="data?.count"
        :reviews="data?.reviews"
      />
      <q-btn
        class="btn-legacy btn"
        no-caps
      >
        <span>Показать номер телефона</span>
      </q-btn>
      <nav class="legacy-nav flex-row">
        <NuxtLink
          class="legacy-nav__link"
          to="/products"
        >
          Товары и услуги
        </NuxtLink>
        <NuxtLink
          class="legacy-nav__link"
          to="/agents"
        >
          Агенты <span>5</span>
        </NuxtLink>
        <NuxtLink
          class="legacy-nav__link"
          to="/about"
        >
          О компании
        </NuxtLink>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/variables';
@import '@/assets/style/mixins';
.legacy {
  border-bottom: 1px solid $color-border-two;
  padding-bottom: 32px;

  @media (max-width: $mxs) {
    padding: 8px 0px;
  }
}

.legacy-wrapper {
  flex-direction: column;
  @media (max-width: $mxs) {
    overflow-x: auto;
  }
}

.legacy-info-block {
  margin-bottom: 24px;

  @media (max-width: $mxs) {
    display: none;
  }
}

.legacy-image {
  overflow: hidden;
  border-radius: 20px;
  width: 120px;
  height: 120px;
  margin-bottom: 24px;

  @media (max-width: $mxs) {
    display: none;
  }
}
.legacy-title {
  margin-bottom: 12px;
  @media (max-width: $mxs) {
    display: none;
  }
}

.btn-legacy {
  padding: 16px 20px;
  background: $color-green;
  color: #fff;
  border-radius: 12px;
  font-weight: 500;
  margin-bottom: 32px;
  @include fslh(15, 24);

  @media (max-width: $mxs) {
    display: none;
  }
}

.legacy-nav {
  gap: 8px;

  @media (max-width: $mxs) {
    width: 100%;
    padding: 0px 0px 0px 16px;
  }

  &__link {
    white-space: nowrap;
    border-radius: 12px;
    padding: 8px 12px;
    background: $color-grey;
    border: 1px solid transparent;
    font-weight: 500;
    color: $color-text;
    span {
      color: $color-light-grey;
    }
    &.router-link-active {
      border-color: $color-text;
    }
  }
}
</style>
