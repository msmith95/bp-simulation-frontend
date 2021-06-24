<template>
    <div class="-ml-8 -mr-8 px-8 pt-8 pb-6 bg-gray-800 mb-16">
        <div class="flex flex-row w-4/5 mx-auto justify-between">
            <div class="w-1/3">
                <h1 class="text-white text-7xl">A better way to</h1>
                <h1 class="text-7xl text-blue-300 mb-4">help yourself</h1>
                <p class="text-gray-300 text-lg">
                    Understanding your mental health can be a difficult task.
                    Blueprint Simulation helps by analyzing your responses to our diagnostic screener and recommending
                    which areas to take a deeper dive into.
                </p>
            </div>
        </div>
    </div>

    <div class="mb-32">
        <p class="text-center text-blue-500 text-md uppercase font-medium">Start your journey</p>
        <h4 class="text-3xl font-bold text-center">Never known where to start? No problem.</h4>
        <p class="text-gray-600 text-center w-1/3 mx-auto mb-6">
            Knowing where to start on your journey of understanding your mental health can be difficult.
            Our diagnostic screener helps with just this. After taking our screener, we'll tell you what areas you
            should focus on. For each of these areas, we'll recommend a questionnaire specific to that area so
            you and your mental health provider
        </p>

        <div class="flex flex-row items-center">
            <div class="shadow-xl rounded inline-flex mx-auto">
                <img src="../assets/counseling.jpg" class="mx-auto" style="height:700px" alt="">
            </div>
        </div>


    </div>

    <div class="mb-16">
        <p class="text-center text-blue-500 text-md uppercase font-medium">Ready to get started? </p>
        <h4 class="text-3xl font-bold text-center">Click the Take Screener button at the top to get started</h4>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Header from "../components/navigation/Header.vue";

export default defineComponent({
    name: 'Home',
    components: {
        Header,
    }
})
</script>

<style scoped>

</style>
