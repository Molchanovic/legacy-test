<script lang="ts" setup>
import { productsApi } from '@/api'

definePageMeta({
  layout: 'default',
})

const { data: data } = await useFetch(productsApi)

const select = ref(null)
const options = ref(['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'])
</script>

<template>
  <div class="container">
    <section class="section products">
      <q-select
        v-model="select"
        outlined
        standout
        class="products-select"
        label="Все товары и услуги"
        :options="options"
      />

      <div class="products-wrapper">
        <ProductCard
          v-for="card of data"
          :key="card.id"
          :name="card.name"
          :price="card.price"
          :image_path="card.image"
          :views="card.views"
          :time="card.time"
          :is_hide="!!card.isHide"
        />
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/variables.scss';
.section {
}
.products {
}

.products-select {
  width: 438px;
  margin: 0px auto;

  @media (max-width: $mxs) {
    width: 100%;
  }
}
.products-wrapper {
  padding: 24px 0px 72px 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 48px 8px;

  @media (max-width: $mxl) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: $mlg) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: $mxs) {
    grid-template-columns: 1fr;
  }
}

.q-select--without-input .q-field__control {
  background-color: $color-select;
  border-radius: 12px;
  border-color: $color-border;
}
</style>
