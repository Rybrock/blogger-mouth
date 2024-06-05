<template>
  <div class="pt-16 flex flex-col items-center">
    <form method="POST" @submit.prevent="register" class="flex flex-col justify-center items-center pt-10">
      <h2 class="pb-10 font-bold text-lg">Register for an account</h2>
      <div class="mb-4">
        <label for="name" class="sr-only">Name</label>
        <input v-model="form.name" type="text" id="name" placeholder="Name" autocomplete="name" required class="px-4 py-2 border rounded-md">
      </div>
      <div class="mb-4">
        <label for="email" class="sr-only">Email</label>
        <input v-model="form.email" type="email" id="email" placeholder="Email" autocomplete="email" required class="px-4 py-2 border rounded-md">
      </div>
      <div class="mb-4">
        <label for="password" class="sr-only">Password</label>
        <input v-model="form.password" type="password" id="password" placeholder="Password" autocomplete="password" required class="px-4 py-2 border rounded-md">
      </div>
      <div class="mb-4">
        <label for="password_confirmation" class="sr-only">Confirm Password</label>
        <input v-model="form.password_confirmation" type="password" id="password_confirmation" autocomplete="new-password" placeholder="Confirm Password" required class="px-4 py-2 border rounded-md">
      </div>
      <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md">Register</button>
    </form>
    <div v-if="message" class="mt-4 text-red-500 font-bold">{{ message }}</div>
  </div>
</template>

  
  <script setup>
  import { ref } from 'vue'
  import { useAxios } from '~/composables/useAxios'
  import { useRouter } from 'vue-router'; // Import the useRouter function

const router = useRouter();
const user = ref(null);
  
  const form = ref({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  })
  const message = ref('');
  
  const register = async () => {
    try {
    const response = await useAxios().post('/register', form.value);
    message.value = response.data.message;
    response.data = user;
    console.log(user);
    router.push('/');
  } catch (error) {
    console.error(error);
    message.value = error.response.data.message || 'An error occurred';
  }
}


  </script>

  
  