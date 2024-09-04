<script setup lang="ts">
import { generalApi } from '@/api'

const { data: data } = useFetch(generalApi)
</script>

<template>
  <header class="header">
    <div class="container header-wrapper">
      <div class="menu-burger">
        <span />
        <span />
        <span />
      </div>
      <div class="logo flex-row">
        <svg class="icon">
          <use xlink:href="@/assets/sprite.svg#logo" />
        </svg>
      </div>
      <q-btn
        class="btn-category"
        no-caps
      >
        <svg class="icon">
          <use xlink:href="@/assets/sprite.svg#category" />
        </svg>
        <span>Все категории</span>
      </q-btn>

      <div class="current-city flex-row">
        <svg class="icon">
          <use xlink:href="@/assets/sprite.svg#geo" />
        </svg>
        <span class="current-city__text">Ростов-на-Дону</span>
      </div>
      <NuxtLink
        class="add-link"
        to="/"
      >
        Разместить объявление
      </NuxtLink>
      <div class="profile-menu">
        <div class="profile-menu__burger menu-burger menu-burger_profile">
          <span />
          <span />
          <span />
        </div>
        <div class="profile-menu__image">
          <NuxtImg :src="data?.avatar" />
        </div>
      </div>
      <div class="header-basket">
        <svg class="icon">
          <use xlink:href="@/assets/sprite.svg#bag" />
        </svg>
        <span class="header-basket__count flex-row">1</span>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@import '@/assets/style/variables';
@import '@/assets/style/mixins';

.header {
  padding: 8px 0px;
  background-color: $color-header;
  @include fslh(15, 24);

  @media (max-width: $msm) {
    padding: 14px 0px;
  }
}

.header-wrapper {
  display: flex;
  align-items: center;

  @media (max-width: $msm) {
    justify-content: space-between;
  }
}
.logo {
  margin-right: 37px;
  .icon {
    width: 124px;
    height: 28px;
  }

  @media (max-width: $mlg) {
    margin-right: 24px;
  }

  @media (max-width: $msm) {
    margin-right: 42px;
    margin-left: 100px;
  }
}

.btn-category {
  display: flex;
  align-items: center;
  color: $color-text;
  background-color: $color-grey;
  margin-right: auto;
  padding: 12px 20px;
  gap: 8px;
  border-radius: 40px;
  min-height: unset;

  .q-focus-helper {
    display: none !important;
  }

  .icon {
    fill: $color-grey;
    width: 18px;
    height: 18px;
    margin-right: 8px;
  }

  @media (max-width: $msm) {
    display: none;
  }
}

.current-city {
  display: flex;
  align-items: center;
  margin-right: 30px;

  &::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 32px;
    background-color: $color-border-two;
    margin-left: 30px;
  }
  .icon {
    width: 8px;
    height: 12px;
    margin-right: 8px;
  }

  @media (max-width: $mlg) {
    margin-right: 15px;

    &::after {
      margin-left: 15px;
    }
  }

  @media (max-width: $msm) {
    display: none;
  }
}
.add-link {
  color: $color-green;
  font-weight: 500;
  margin-right: 35px;

  @media (max-width: $msm) {
    display: none;
  }
}

.profile-menu {
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: $color-grey;
  padding: 4px 4px 4px 15px;
  border-radius: 24px;
  gap: 11px;
  cursor: pointer;

  &__image {
    width: 40px;
    height: 40px;
    overflow: hidden;
    border-radius: 50%;
  }

  @media (max-width: $msm) {
    display: none;
  }
}

.menu-burger {
  display: flex;
  flex-direction: column;
  gap: 3px;
  span {
    width: 16px;
    height: 0px;
    border: 1px solid $color-span;
    background-color: $color-span;
  }

  @media (min-width: $sm) {
    display: none;

    &_profile {
      display: flex;
    }
  }
}

.header-basket {
  position: relative;

  &__count {
    justify-content: center;
    position: absolute;
    width: 15px;
    height: 15px;
    border: 1px solid #fff;
    border-radius: 50%;
    background-color: $color-green;
    color: #fff;
    top: -5px;
    right: -6px;
    @include fslh(11, 12);
    padding: 0px 1px 1px 0px;
  }
  .icon {
    width: 18px;
    height: 19px;
  }

  @media (min-width: $sm) {
    display: none;
  }
}
</style>
