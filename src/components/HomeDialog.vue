<template>
   <Dialog :title="'Payment successful'">
      <template #activator="{ open }">
         <button class="btn btn-primary" @click="open">Open dialog</button>
      </template>
      <template #default="{ close }">
         <div class="mt-2">
            <p class="text-sm text-gray-500">
               Your payment has been successfully submitted. We’ve sent you an email with all of the details of your
               order.
            </p>
         </div>

         <div class="mt-4">
            <button class="btn btn-primary" @click="close">Got it, thanks!</button>
         </div>
      </template>
   </Dialog>
</template>

<script lang="ts" setup>
const { user } = useHome()

watch(user, (newUser) => {
   console.log("newUser", newUser.id)
})
</script>
