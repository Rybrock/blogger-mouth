import type { UseFetchOptions } from 'nuxt/app'

export function useApiFetch<T> (path: string | (() => string), options: UseFetchOptions<T> = {}) {


    let headers: any = {
        accept: "application/json",
        referer: "http://nginx:8083",
        AccessControlAllowOrigin: "*",
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
    // console.log(token);
    console.log(path);

    return useFetch('http://nginx:8087' + path, {
        credentials: "include",
        // watch: false,
        ...options,
        headers: {
            ...headers,
            ...options?.headers
        }
    })
        
}