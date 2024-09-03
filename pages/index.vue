<script lang="ts" setup>
definePageMeta({
  layout: 'login',
})
const name: string = ref('')
const password: string = ref('')

function onSubmit() {
  if (accept.value !== true) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'You need to accept the license and terms first',
    })
  }
  else {
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: 'Submitted',
    })
  }
}

function onReset() {
  name.value = null
  password.value = null
}
</script>

<template>
  <section class="section auth flex-row">
    <q-form
      class="q-gutter-md auth-form"
      @submit="onSubmit"
      @reset="onReset"
    >
      <q-input
        v-model="name"
        filled
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Заполните поле']"
      />

      <q-input
        v-model="password"
        filled
        type="password"
        label="Your age *"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Заполлните поле',
          (val) =>
            (val !== null && val > 8)
            || 'Пароль должен быть больше 7-ми символов',
        ]"
      />

      <q-btn
        label="Авторизоваться"
        type="submit"
        color="primary"
      />
    </q-form>
  </section>
</template>

<style lang="scss" scoped>
.auth {
  margin: auto 0px;
  justify-content: center;
  height: 100%;
}

.auth-form {
}
</style>
