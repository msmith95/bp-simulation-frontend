<template>
    <header class="bg-white -ml-8 -mr-8 shadow">
        <div class="mx-auto py-6 px-8">
            <h1 class="text-3xl font-bold text-gray-900">Take Screener</h1>
        </div>
    </header>
    <div class="py-6 flex flex-col flex-1 justify-between">
        <div class="flex flex-col flex-1 relative">
            <h1 class="text-2xl text-center mb-8" v-if="currentQuestionIndex !== totalQuestions">During the past TWO (2) WEEKS, how much (or how often) have you been bothered by the following problems?</h1>
            <transition-group name="slide" tag="div" class="mx-auto w-1/3 relative" v-if="currentQuestionIndex !== totalQuestions">
                <div class="w-full absolute" v-for="question in [currentQuestionIndex]" :key="currentQuestion.question_id">
                    <ScreenerQuestion :answers="answerOptions" :question="currentQuestion" @answer="handleAnswer"></ScreenerQuestion>
                </div>
            </transition-group>
            <div class="card" v-else>
                <div class="card-body">
                    <h1 class="text-xl">Thanks for completing the screener!</h1>
                </div>
            </div>

        </div>

        <ScreenerProgress
            :current-question="(currentSectionIndex + 1) *(currentQuestionIndex + 1)"
            :total-questions="totalQuestions"></ScreenerProgress>


    </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from "vue";
import ScreenerProgress from '../../components/screener/ScreenerProgress.vue';
import {ScreenerAnswer, useScreenerService} from "../../services/ScreenerService";
import ScreenerQuestion from "../../components/screener/ScreenerQuestion.vue";

export default defineComponent({
    name: 'TakeScreener',
    components: {
        ScreenerProgress,
        ScreenerQuestion,
    },
    setup() {
        const answers = ref([] as ScreenerAnswer[])
        const {loading, screener, fetchScreener} = useScreenerService()
        const currentSectionIndex = ref(0)
        const currentQuestionIndex = ref(0)
        const currentQuestion = computed(() => {
            if (screener.value !== null && currentQuestionIndex.value < screener.value!!.content.sections[currentSectionIndex.value].questions.length) {
                return screener.value!!.content.sections[currentSectionIndex.value].questions[currentQuestionIndex.value]
            }
        })

        const answerOptions = computed(() => {
            if (screener.value !== null) {
                return screener.value!!.content.sections[currentSectionIndex.value].answers
            }
            return []
        })

        const handleAnswer = (value: number) => {
            answers.value.push({
                question_id: currentQuestion.value.question_id,
                value: value
            })

            if (currentQuestionIndex.value + 1 < screener.value!!.content.sections[currentSectionIndex.value].questions.length) {
                currentQuestionIndex.value += 1
            } else if (currentSectionIndex.value + 1 < screener.value!!.content.sections.length) {
                currentSectionIndex.value += 1
                currentQuestionIndex.value = 0
            } else if (currentQuestionIndex.value + 1 === totalQuestions.value) {
                currentQuestionIndex.value += 1
            }
        }

        const totalQuestions = computed(() => {
            if (screener.value === null) {
                return 0
            }
            return screener.value!!.content.sections.map((it) => it.questions).map((it) => it.length).reduce((acc, cur) => {
                return acc + cur
            }, 0)
        })

        return {
            loading,
            currentQuestionIndex,
            currentQuestion,
            answerOptions,
            totalQuestions,
            currentSectionIndex,
            handleAnswer
        }
    }
})
</script>

<style scoped>

</style>
