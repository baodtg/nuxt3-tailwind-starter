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
      <SharedDialog :title="'Payment successful'">
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
      </SharedDialog>
   </div>
</template>

<script lang="ts" setup>
const toast = useToast()
const { getUser } = useUserRepository()

function showToast() {
   // Use it!
   toast("I'm a toast!")
}

onMounted(() => {
   getUser("baodtg").then(({ data: user }) => {
      console.log(user)
   })
})
</script>
