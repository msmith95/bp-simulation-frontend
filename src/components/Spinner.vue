<template>
    <svg class="spinner" width="64px" height="64px" viewBox="0 0 66 66">
        <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
    </svg>
</template>

<script lang="ts">
import {defineComponent} from "vue";

/**
 * Adapted from: https://codepen.io/mrrocks/pen/EiplA
 */
export default defineComponent({
    name: 'Spinner'
})
</script>

<style scoped>

</style>