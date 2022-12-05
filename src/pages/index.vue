<template>
   <div class="mx-auto max-w-7xl p-4">
      Index page
      {{ $t("Hello") }}
      <div class="my-2">
         <input class="form-control mb-2 w-full" type="text" />
         <select class="form-control mb-2 w-full">
            <option value="1">Option 1</option>
            <option value="2">Option 1</option>
            <option value="3">Option 1</option>
         </select>
         <button class="btn btn-primary mb-2" @click="showToast">Show Notification</button>
      </div>
      <HomeDialog />
   </div>
</template>

<script lang="ts" setup>
const { showToast, getUser } = useHome()

onMounted(() => {
   //getUser("baodtg")
})
</script>
