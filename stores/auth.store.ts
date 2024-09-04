interface IAuthStore {
  email: string
  token: string
}

const defaultValue: { user: IAuthStore } = {
  user: {
    email: '',
    token: '',
  },
}

export const useAuthStore = defineStore('auth', {
  state: () => defaultValue,
  getters: {
    token: state => state.user.token,
    email: state => state.user.email,
  },
  actions: {
    setUser(input: IAuthStore) {
      this.$patch({ user: input })
    },
    setToken(token: string) {
      this.user.token = token
    },
  },
})
