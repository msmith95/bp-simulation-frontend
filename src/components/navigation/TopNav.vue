<template>
    <nav class="bg-gray-800">
        <div class="px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <p class="text-white">Blueprint Simulation</p>
                    <div class="ml-10 flex items-baseline space-x-4 text-gray-300">
                        <router-link :to="{name: 'home'}"
                                     class="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" active-class="hover:bg-gray-900 bg-gray-900 text-white">Home
                        </router-link>
                        <router-link :to="{name: 'take-screener', params: {id: 'abcd-123'}}"
                                     class="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" active-class="hover:bg-gray-900 bg-gray-900 text-white">
                            Take Screener
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: 'TopNav',
})
</script>

<style scoped>

</style>
