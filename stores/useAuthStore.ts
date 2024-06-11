import { defineStore } from "pinia";
import { useApiFetch } from "~/composables/useApiFetch";

type User = {
    id: number;
    name: string;
    email: string;
}

type Credentials = {
    email: string;
    password: string;
}

type RegistrationInfo = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null);
    const isLoggedIn = computed(() => !!user.value);

    async function fetchUser() {
        await useApiFetch("/sanctum/csrf-cookie")
        try {
            const { data } = await useApiFetch("/api/user");
            user.value = data.value as User;
            console.log(user.value);
        } catch (error) {
            console.error("Error fetching user:", error);
            user.value = null;
        }
    }

    async function login(credentials: Credentials) {
        await useApiFetch("/sanctum/csrf-cookie")
        const login = await useApiFetch("/api/login", {
            method: "POST",
            body: credentials
        })

        await fetchUser()

        return login
    }

    async function register(info: RegistrationInfo) {
        await useApiFetch("/sanctum/csrf-cookie")

        const register = await useApiFetch("/api/register", {
            method: "POST",
            body: info
        })

        await fetchUser()

        return register
    }

    async function logout() {
        try {
            await useApiFetch("/logout", { method: "POST" });
            user.value = null;
            localStorage.removeItem('authToken'); // Remove the token
            navigateTo('/');
        } catch (error) {
            console.error("Error during logout:", error);
        }
    }

    function initialize() {
        const token = localStorage.getItem('authToken');
        if (token) {
            useApiFetch.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            fetchUser();
        }
    }

    return { user, login, isLoggedIn, fetchUser, logout, register, initialize };
});
