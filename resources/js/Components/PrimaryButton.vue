<template>
    <button :type="type"
        class="inline-flex items-center text-white bg-primary hover:bg-opacity-80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        <CursorArrowRippleIcon class="h-6 w-6 text-white" />
        <slot />
    </button>
</template>

<script setup>
import { CursorArrowRippleIcon } from '@heroicons/vue/24/solid'

defineProps({
    type: {
        type: String,
        default: 'submit',
    },
});
</script>
