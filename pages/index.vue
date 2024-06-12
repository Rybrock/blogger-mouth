<script setup>

</script>

<template>
    <div class="pt-16 pb-10 flex flex-col md:flex-row justify-center items-center w-full h-screen">
      <div class="flex flex-col justify-center items-center pt-5 px-3 sm:w-6/12 text-center gap-y-4">
        <h1 class="text-lg font-bold mt-4">Blogger Mouth</h1>
        <p>A place for your thoughts and ideas to become reality</p>
        <p>
          Welcome to Blogger Mouth! Here, you can register for an account and dive into a vibrant community of bloggers. Create engaging blog posts, share your thoughts, and interact with others through comments and likes.</p>
          <p>Stay tuned for many exciting new features coming soon. We are constantly working to enhance your experience and provide more ways to connect, share, and enjoy the world of blogging.</p>
        <nuxt-link to="#">
          <button class="px-4 py-2 bg-green-500 text-white rounded-md">Find Out More</button>
        </nuxt-link>
      </div>
      <div class="flex justify-center items-center pt-5 sm:w-6/12">
        <div class="flex flex-col justify-center items-center gap-x-5">
        <p class="pb-2">Register for an account to get started</p>
          <nuxt-link to="/auth/register">
            <button class="px-4 py-2 bg-blue-500 text-white rounded-md">Register</button>
          </nuxt-link>
        <p class="py-2">Already got an account, login here</p>
          <nuxt-link to="/auth/login">
            <button class="px-4 py-2 bg-blue-500 text-white rounded-md">Login</button>
          </nuxt-link>
        </div>
    
      </div>
      <!-- -->
    </div>
  </template>
