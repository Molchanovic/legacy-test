<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-wrapper flex-row">
        <p class="copyright">© Annonce 2023</p>
        <nav class="footer-nav">
          <NuxtLink to="/"> Документы </NuxtLink>
          <NuxtLink to="/"> О компании </NuxtLink>
          <NuxtLink to="/"> Продавцам </NuxtLink>
          <NuxtLink to="/"> Покупателям </NuxtLink>
          <NuxtLink to="/"> Разместить объявление </NuxtLink>
        </nav>
        <a
          href="##"
          class="footer-lang flex-row"
        >
          <div class="footer-lang__image">
            <svg class="icon">
              <use xlink:href="@/assets/sprite.svg#ru" />
            </svg>
          </div>

          <p class="footer-lang__text">Русский</p>
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '@/assets/style/variables';
@import '@/assets/style/mixins';

.footer {
  @include fslh(15, 24);
  background-color: $color-footer;
  border-top: 1px solid $color-border;
  padding: 24px 0px 40px 0px;
}

.footer-wrapper {
  gap: 20px;

  @media (max-width: $msm) {
    align-items: flex-start;
    flex-direction: column;
  }
}
.copyright {
  font-weight: 500;
}

.footer-nav {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  a {
    transition: 0.3s;
    color: $color-light-grey;

    &:hover {
      color: $color-span;
    }
  }

  @media (max-width: $mxs) {
    flex-direction: column;
    align-items: flex-start;
  }
}

.footer-lang {
  &__text {
  }

  &__image {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 6px;
  }
  .icon {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: $sm) {
    display: none;
  }
}
</style>
