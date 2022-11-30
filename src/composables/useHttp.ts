type FetchParams = Parameters<typeof $fetch>

export const useHttp = () => {
   const defaultHeaders = computed<Record<string, string>>(() => ({
      "Content-Type": "application/json",
   }))

   const defaultOptions = computed<FetchParams[1]>(() => ({
      baseURL: "/",
   }))

   async function get<T>(url: string, options?: FetchParams[1]) {
      let error = null
      const response = await $fetch<T>(url, {
         method: "GET",
         ...defaultOptions,
         ...options,
         headers: {
            ...defaultHeaders.value,
            ...options?.headers,
         },
      }).catch((err) => {
         error = err
      })
      return { data: response, error }
   }

   async function post<T>(url: string, body: Record<string, any>, options?: FetchParams[1]) {
      let error = null
      const response = await $fetch<T>(url, {
         method: "POST",
         body,
         ...defaultOptions,
         ...options,
         headers: {
            ...defaultHeaders.value,
            ...options?.headers,
         },
      }).catch((err) => {
         error = err
      })
      return { data: response, error }
   }

   return {
      get,
      post,
   }
}
