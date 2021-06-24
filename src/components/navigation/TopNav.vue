<template>
    <nav class="bg-gray-800">
        <div class="px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <p class="text-white">Blueprint Simulation</p>
                    <div class="ml-10 flex items-baseline space-x-4">
                        <router-link :to="{name: 'home'}" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Home</router-link>
                        <router-link :to="{name: 'take-screener', params: {id: 'abcd-123'}}" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Take Screener</router-link>
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
    components: {

    },
    setup() {

    }
})
</script>

<style scoped>

</style>
