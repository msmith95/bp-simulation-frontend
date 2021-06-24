<template>
    <header class="bg-white shadow mb-4">
        <div class="mx-auto py-6 px-8">
            <h1 class="text-3xl font-bold text-gray-900">
                <slot></slot>
            </h1>
        </div>
    </header>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: 'Header'
})
</script>

<style scoped>

</style>
