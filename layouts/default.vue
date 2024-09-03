<script lang="ts" setup></script>

<template>
  <q-layout class="wrapper">
    <AppHeader />
    <main class="main">
      <TabsNavigation />
      <slot />
    </main>
    <AppFooter />
  </q-layout>
</template>
