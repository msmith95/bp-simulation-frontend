<template>
    <div class="card w-full">
        <div class="card-body p-8">
            <h6 class="text-xl text-center mb-6">{{ question.title }}</h6>

            <div class="flex flex-col">
                <button v-for="answer in answers" @click="$emit('answer', answer.value)"
                        class="button button-primary mb-4">{{ answer.title }}
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import {ScreenerAnswerOption, ScreenerQuestion} from "../../services/ScreenerService";

export default defineComponent({
    name: 'ScreenerQuestion',
    props: {
        question: {
            type: Object as PropType<ScreenerQuestion>,
            required: true
        },
        answers: {
            type: Array as PropType<Array<ScreenerAnswerOption>>,
            required: true
        }
    },
    emits: ['answer']
})
</script>

<style scoped>

</style>
