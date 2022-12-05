type FetchParams = Parameters<typeof $fetch>

export const useHttp = () => {
   const config = useRuntimeConfig()

   const defaultHeaders = computed<Record<string, string>>(() => ({
      "Content-Type": "application/json",
   }))

   const defaultOptions = computed<FetchParams[1]>(() => ({
      baseURL: config.public.API_BASE_URL,
   }))

   async function fetch<T>(...args: FetchParams) {
      let error: any = null
      const response = await $fetch<T>(args[0], {
         ...defaultOptions.value,
         ...args[1],
         headers: {
            ...defaultHeaders.value,
            ...args[1]?.headers,
         },
      }).catch((err) => {
         error = err
      })
      return { data: response as T, error }
   }

   function get<T>(url: string, options?: FetchParams[1]) {
      return fetch<T>(url, {
         method: "GET",
         ...options,
      })
   }

   function post<T>(url: string, body: Record<string, any>, options?: FetchParams[1]) {
      return fetch<T>(url, {
         method: "POST",
         body,
         ...options,
      })
   }

   return {
      get,
      post,
   }
}
