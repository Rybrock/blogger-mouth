<template>
  <div class="pt-16 flex flex-col items-center">
    <form method="POST" @submit.prevent="register" class="flex flex-col justify-center items-center pt-10">
      <h2 class="pb-10 font-bold text-lg">Register for an account</h2>
      <div class="mb-4">
        <label for="name" class="sr-only">Name</label>
        <input v-model="form.name" type="text" id="name" placeholder="Name" class="px-4 py-2 border rounded-md">
      </div>
      <div class="mb-4">
        <label for="email" class="sr-only">Email</label>
        <input v-model="form.email" type="email" id="email" placeholder="Email" class="px-4 py-2 border rounded-md">
      </div>
      <div class="mb-4">
        <label for="password" class="sr-only">Password</label>
        <input v-model="form.password" type="password" id="password" placeholder="Password" class="px-4 py-2 border rounded-md">
      </div>
      <div class="mb-4">
        <label for="password_confirmation" class="sr-only">Confirm Password</label>
        <input v-model="form.password_confirmation" type="password" id="password_confirmation" placeholder="Confirm Password" class="px-4 py-2 border rounded-md">
      </div>
      <button :disabled="loading" type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md">Register</button>
    </form>
    <div v-if="message" class="mt-4 text-red-500 font-bold">{{ message }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useAuthStore } from '~/stores/useAuthStore';


const auth = useAuthStore();
const router = useRouter()
const user = ref(null)
const message = ref('')
const loading = ref(false)
const form = ref({
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
})

async function register() {
  message.value = ''
  try {
    const response = await auth.register(form.value)
    user.value = response.data.user
    console.log('User registered:', user.value);
    router.push('/');
  } catch (error) {
    console.error('Registration error:', error);
    message.value = error.response?.data?.message || 'An error occurred during registration.';
  } 
}
</script>