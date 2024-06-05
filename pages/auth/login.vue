<template>
  <div>
    <!-- -->
    <div class="pt-16 flex flex-col">
      <form
        method="POST"
        @submit.prevent="login"
        class="flex flex-col justify-center items-center pt-10"
      >
        <h2 class="pb-10 font-bold text-lg">Login to your account</h2>
        <div class="mb-4">
            <label for="email" class="sr-only">Email</label>
            <input v-model="form.email" type="email" id="email" placeholder="Email" autocomplete="email" required class="px-4 py-2 border rounded-md">
          </div>
          <div class="mb-4">
            <label for="password" class="sr-only">Password</label>
            <input v-model="form.password" type="password" id="password" placeholder="Password" autocomplete="password" required class="px-4 py-2 border rounded-md">
          </div>
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md">Login</button>
      </form>
      <div v-if="message">{{ message }}</div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useAxios } from '~/composables/useAxios'
  
  const form = ref({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  })
  console.log(form)
  
  const login = async () => {
  try {
    const response = await useAxios().post('/login', form.value);
    console.log(response);
  } catch (error) {
    console.log(error)
  }
}


</script>
