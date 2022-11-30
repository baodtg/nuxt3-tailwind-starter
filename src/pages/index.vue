<template>
   <div>
      Index page
      <button class="px-4 py-2 font-semibold text-sm text-white rounded-full shadow-sm bg-primary">Hello</button>
   </div>
</template>

<script lang="ts" setup>
interface User {
   id: number
}
const { get } = useHttp()

onMounted(() => {
   get<User>("https://api.github.com/users/baodtg").then((data) => {
      console.log(data)
   })
})
</script>
