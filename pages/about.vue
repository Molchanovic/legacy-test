<script lang="ts" setup>
import { aboutApi } from '@/api'

definePageMeta({
  layout: 'default',
})

const { data: data } = await useFetch(aboutApi)
</script>

<template>
  <div class="container">
    <div class="about">
      <h2 class="about__title">
        О компании
      </h2>
      <p class="about__text">
        {{ data.text }}
      </p>

      <p class="about__schedule">
        Режим работы - {{ data.schedule }}
      </p>
      <h2 class="about__title">
        Местоположение
      </h2>
      <p class="about__schedule">
        {{ data.address }}
      </p>
    </div>
  </div>
</template>
