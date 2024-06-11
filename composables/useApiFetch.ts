import type { UseFetchOptions } from 'nuxt/app'

export async function useApiFetch<T> (path: string | (() => string), options: UseFetchOptions<T> = {}) {

    let headers: any = {
        accept: "application/json",
        referer: "http://localhost:3000",
        'Access-Control-Allow-Origin': "*",
    }

    const token = useCookie('XSRF-TOKEN')
    if (token.value) {
        headers['X-XSRF-TOKEN'] = token.value as string
    }

    if (process.server) {
        headers = {
            ...headers,
            ...useRequestHeaders(["cookie"])
        }
    }

    try {
        const response = await useFetch('http://blog.test' + path, {
            credentials: "include",
            watch: false,
            ...options,
            headers: {
                ...headers,
                ...options.headers
            },
        });

        console.log("Response:", response);

        if (response.error) {
            console.error("Response Error:", response.error);
        }

        return response;
    } catch (error) {
        console.error("Error:", error);
        throw error; 
    }
}
