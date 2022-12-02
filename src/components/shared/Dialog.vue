<template>
   <slot name="activator" :open="openModal"></slot>
   <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10">
         <TransitionChild
            as="template"
            enter="duration-200 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-100 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
         >
            <div class="fixed inset-0 bg-black bg-opacity-25" :class="backdropClass" />
         </TransitionChild>

         <div class="fixed inset-0 overflow-y-auto">
            <div class="flex min-h-full items-center justify-center p-4 text-center">
               <TransitionChild
                  as="template"
                  enter="duration-200 ease-out"
                  enter-from="opacity-0 scale-90"
                  enter-to="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leave-from="opacity-100 scale-100"
                  leave-to="opacity-0 scale-90"
               >
                  <DialogPanel
                     class="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                     :class="panelClass"
                  >
                     <DialogTitle
                        v-if="title"
                        as="h3"
                        class="text-lg font-medium leading-6 text-gray-900"
                        :class="titleClass"
                     >
                        {{ title }}
                     </DialogTitle>
                     <slot :close="closeModal"></slot>
                  </DialogPanel>
               </TransitionChild>
            </div>
         </div>
      </Dialog>
   </TransitionRoot>
</template>

<script lang="ts" setup>
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from "@headlessui/vue"

const props = defineProps({
   modelValue: {
      type: Boolean,
      default: undefined,
   },
   panelClass: {
      type: String,
      default: "",
   },
   titleClass: {
      type: String,
      default: "",
   },
   backdropClass: {
      type: String,
      default: "",
   },
   title: {
      type: String,
      default: "",
   },
})

const emit = defineEmits(["update:modelValue"])

const open = ref(false)

const isOpen = computed({
   get: () => (props.modelValue === undefined ? open.value : props.modelValue),
   set: (val) => {
      if (props.modelValue === undefined) open.value = val
      else emit("update:modelValue", val)
   },
})

function closeModal() {
   isOpen.value = false
}
function openModal() {
   isOpen.value = true
}
</script>
