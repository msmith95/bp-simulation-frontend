<template>
    <header class="bg-white -ml-8 -mr-8 shadow">
        <div class="mx-auto py-6 px-8">
            <h1 class="text-3xl font-bold text-gray-900">Take Screener</h1>
        </div>
    </header>
    <div class="py-6 flex flex-col flex-1 justify-between">
        <div class="flex flex-col flex-1">
            <h1 class="text-2xl text-center mb-8">During the past TWO (2) WEEKS, how much (or how often) have you been bothered by the following problems?</h1>
            <div class="card mx-auto w-1/3">
                <div class="card-body p-8">
                    <h6 class="text-xl text-center mb-6">Little interest or pleasure in doing things?</h6>

                    <div class="flex flex-col">
                        <button class="button button-primary mb-4">Not at all</button>
                        <button class="button button-primary mb-4">Rare, less than a day or two</button>
                        <button class="button button-primary mb-4">Several days</button>
                        <button class="button button-primary mb-4">More than half the days</button>
                        <button class="button button-primary mb-4">Nearly every day</button>
                    </div>
                </div>
            </div>
        </div>

        <ScreenerProgress :current-question="3" :total-questions="8"></ScreenerProgress>


    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ScreenerProgress from '../../components/screener/ScreenerProgress.vue';

export default defineComponent({
    name: 'TakeScreener',
    components: {
        ScreenerProgress,
    },
    setup() {

    }
})
</script>

<style scoped>

</style>
