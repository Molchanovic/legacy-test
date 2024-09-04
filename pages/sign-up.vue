<script lang="ts" setup>
import { registerApi } from '@/api'

definePageMeta({
  layout: 'login',
})
const email: string = ref('')
const password: string = ref('')
const authStore = useAuthStore()
const router = useRouter()

const register = async () => {
  const responce = await $fetch(registerApi, {
    method: 'POST',
    body: {
      email: email.value,
      password: password.value,
    },
  })
  const newUser = {
    user: {
      email: responce.user.email,
      token: responce.accessToken,
    },
  }
  useCookie('token', {
    default: () => responce.accessToken,
    watch: false,
  })
  authStore.setUser(newUser)
  router.push('/products')
}
</script>

<template>
  <section class="section auth flex-row">
    <q-form
      class="q-gutter-md auth-form"
      @submit="register"
    >
      <h1>Регистрация</h1>
      <q-input
        v-model="email"
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
        label="Зарегистрироваться"
        type="submit"
        color="primary"
      />
      <NuxtLink to="/sign-in">
        Войти
      </NuxtLink>
    </q-form>
  </section>
</template>

<style lang="scss" scoped>
.auth {
  margin: auto 0px;
  justify-content: center;
  height: 100%;
}
</style>
