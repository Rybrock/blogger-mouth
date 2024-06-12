<template>
  <div>
    <div class="pt-16 flex flex-col">
      <form
        method="POST"
        @submit.prevent="login"
        class="flex flex-col justify-center items-center pt-10"
      >
        <h2 class="pb-10 font-bold text-lg">Login to your account</h2>
        <div class="mb-4 relative">
            <label for="email" class="sr-only">Email</label>
            <font-awesome-icon
            icon="fa-regular fa-envelope"
            class="mr-5 text-xl cursor-pointer absolute right-0 top-2.5"
          />
            <input v-model="form.email" type="email" id="email" placeholder="Email" autocomplete="email" required class="px-4 py-2 border rounded-md">
          </div>
          <div class="mb-4 relative">
            <label for="password" class="sr-only">Password</label>
            <font-awesome-icon
            icon="fa-solid fa-lock"
            class="mr-5 text-xl cursor-pointer absolute right-0 top-2.5"
          />
            <input v-model="form.password" type="password" id="password" placeholder="Password" autocomplete="password" required class="px-4 py-2 border rounded-md">
          </div>
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md">Login</button>
        <p class="text-xs mt-2">Not got an account yet? Register <nuxt-link to="/auth/register" class="text-blue-500">here</nuxt-link></p>
      </form>
      <div v-if="message">{{ message }}</div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useAuthStore } from '~/stores/useAuthStore';

  const auth = useAuthStore(); 
  const router = useRouter();
  const message = ref('');

  const form = ref({
    email: '',
    password: ''
  });

  async function login() {
    try {
      const response = await auth.login(form.value);
      message.value = response.data.message;
      router.push('/home');
      console.log('logged in', auth.user);
    } catch (error) {
      console.error("Login error:", error);
      message.value = error.response?.data?.message || 'An error occurred';
    }
  }
</script>
