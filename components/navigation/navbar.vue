<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '~/stores/useAuthStore';

const isOpen = ref(false);
const auth = useAuthStore();

onMounted(async () => {
  try {
    await auth.fetchUser();
    console.log('Current user:', auth.user);
  } catch (error) {
    console.error('Error fetching user:', error);
  }
});
</script>


<template>
  <div>
    <header class="fixed top-0 right-0 left-0 bg-slate-700 text-white">
      <nav class="flex justify-between items-center">
        <span class="px-3 py-5">Blogger Mouth</span>
        <font-awesome-icon
          @click="isOpen = true"
          icon="fa-solid fa-bars"
          class="mr-5 text-xl cursor-pointer"
        />
      </nav>
      <!-- Slide in menu -->
      <USlideover v-model="isOpen">
        <div class="p-4 flex-1">
          <div class="flex justify-between w-full">
            <span class="w-full font-bold">Menu</span>
            <font-awesome-icon
              @click="isOpen = false"
              icon="fa-solid fa-xmark"
              class="mr-5 text-xl text-black cursor-pointer"
            />
          </div>
          <div>
            <div class="flex flex-col gap-y-4 mt-6">
              <nuxt-link to="/" @click="isOpen = false">
                <span>Home</span>
              </nuxt-link>
              <nuxt-link to="/content/posts" @click="isOpen = false">
                <span>Posts</span>
              </nuxt-link>
              <nuxt-link to="/auth/register" @click="isOpen = false">
                <span>Register</span>
              </nuxt-link>
              <nuxt-link to="/auth/login" @click="isOpen = false">
                <span>Login</span>
              </nuxt-link>
              <!-- <div @click.prevent="logout()">
                <button>Logout</button>
              </div> -->
            </div>
          </div>
        </div>
      </USlideover>
    </header>
  </div>
</template>

