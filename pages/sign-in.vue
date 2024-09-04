<script lang="ts" setup>
import { authApi } from '@/api'

definePageMeta({
  layout: 'login',
})
const email: string = ref('')
const password: string = ref('')
const authStore = useAuthStore()
const router = useRouter()

const auth = async () => {
  const responce = await $fetch(authApi, {
    method: 'POST',
    body: {
      email: email.value,
      password: password.value,
    },
  })
  useCookie('token', {
    default: () => responce.accessToken,
    watch: false,
  })
  const updateUser = {
    user: {
      email: responce.user.email,
      token: responce.accessToken,
    },
  }
  authStore.setUser(updateUser)
  router.push('/products')
}
</script>

<template>
  <section class="section auth flex-row">
    <q-form
      class="q-gutter-md auth-form"
      @submit="auth"
    >
      <h1>Авторизация</h1>
      <q-input
        v-model="email"
        filled
        label="Your email *"
        type="email"
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
      <NuxtLink to="/sign-up">
        Зарегистрироваться
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

.auth-form {
}
</style>
