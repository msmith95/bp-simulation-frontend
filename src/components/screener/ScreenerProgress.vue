<template>
    <div class="flex flex-row justify-end mb-8 ">
        <div class="flex flex-col w-1/4 max-w-xs">
            <p class="mb-2" v-if="currentQuestion < totalQuestions + 1">Question {{currentQuestion}} of {{totalQuestions}}</p>
            <p class="mb-2" v-else>Complete!</p>
            <div class="bg-gray-200 h-4 w-full rounded-l rounded-r">
                <div :style="{width: `${progressWidth}%`}" :class="['bg-green-500 h-4 w-16 rounded-l', {'rounded-r': progressWidth === 100}]"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {computed, defineComponent, PropType, toRefs} from "vue";

export default defineComponent({
    name: 'ScreenerProgress',
    props: {
        currentQuestion: {
            type: Number as PropType<number>,
            required: true
        },
        totalQuestions: {
            type: Number as PropType<number>,
            required: true
        }
    },
    setup(props) {
        const {currentQuestion, totalQuestions} = toRefs(props)

        const progressWidth = computed(() => ((currentQuestion.value - 1) / (totalQuestions.value)) * 100)

        return {
            progressWidth
        }
    }
})
</script>

<style scoped>

</style>
