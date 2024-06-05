<script setup>
const isOpen = ref(false)
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
                            <span class="">Home</span>
                        </nuxt-link>
                        <nuxt-link to="/content/posts" @click="isOpen = false">
                            <span class="">Posts</span>
                        </nuxt-link>
                        <nuxt-link to="/auth/register" @click="isOpen = false">
                            <span class="">Register</span>
                        </nuxt-link>
                        <nuxt-link to="/auth/login" @click="isOpen = false">
                            <span class="">Login</span>
                        </nuxt-link>
                    </div>
                    
                </div>
            </div>
        </USlideover>
    </header>

</div>
</template>
