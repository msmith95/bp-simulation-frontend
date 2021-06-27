<template>
    <div class="h-full flex flex-col justify-between flex-1">
        <header class="bg-white -ml-8 -mr-8 shadow" v-if="screener !== null && !loading">
            <div class="mx-auto py-6 px-8">
                <h1 class="text-3xl font-bold text-gray-900">{{screener.content.display_name}}</h1>
            </div>
        </header>
        <div class="py-6 flex flex-col flex-1 justify-between" v-if="screener !== null && !loading">
            <div class="flex flex-col flex-1 relative">
                <h1 class="text-2xl text-center mb-8" v-if="currentQuestionIndex !== totalQuestions">{{currentSection?.title}}</h1>
                <transition-group name="slide" tag="div" class="mx-auto w-1/3 relative min-h-400"
                                  v-if="currentQuestionIndex !== totalQuestions">
                    <div class="w-full absolute" v-for="question in [currentQuestionIndex]"
                         :key="question">
                        <ScreenerQuestion :answers="answerOptions" :question="currentQuestion"
                                          @answer="handleAnswer"></ScreenerQuestion>
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
        <Spinner class="mx-auto mt-8" v-else></Spinner>
    </div>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, ref} from "vue";
import ScreenerProgress from '../../components/screener/ScreenerProgress.vue';
import {ScreenerAnswer, useScreenerService} from "../../services/ScreenerService";
import ScreenerQuestion from "../../components/screener/ScreenerQuestion.vue";
import Spinner from "../../components/Spinner.vue";
import {useRoute} from "vue-router";

export default defineComponent({
    name: 'TakeScreener',
    components: {
        ScreenerProgress,
        ScreenerQuestion,
        Spinner,
    },
    setup() {
        const answers = ref([] as ScreenerAnswer[])
        const {loading, screener, fetchScreener, sendAnswers} = useScreenerService()
        const currentSectionIndex = ref(0)
        const currentQuestionIndex = ref(0)
        const route = useRoute()
        const currentQuestion = computed(() => {
            if (screener.value !== null && currentQuestionIndex.value < screener.value!!.content.sections[currentSectionIndex.value].questions.length) {
                return screener.value!!.content.sections[currentSectionIndex.value].questions[currentQuestionIndex.value]
            }
        })

        const currentSection = computed(() => {
            if (screener.value !== null && currentSectionIndex.value < screener.value!!.content.sections.length) {
                return screener.value!!.content.sections[currentSectionIndex.value]
            }
        })

        const answerOptions = computed(() => {
            if (screener.value !== null) {
                return screener.value!!.content.sections[currentSectionIndex.value].answers
            }
            return []
        })

        const handleAnswer = async (value: number) => {

          if (currentQuestion.value === undefined) {
            return
          }

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
                console.log(answers.value)
                await sendAnswers(route.params.id as string , {answers: answers.value})
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

        onMounted(async () => {
            await fetchScreener(route.params.id as string)
        })

        return {
            loading,
            currentQuestionIndex,
            currentQuestion,
            answerOptions,
            totalQuestions,
            currentSectionIndex,
            handleAnswer,
            currentSection,
            screener,
        }
    }
})
</script>

<style scoped>

</style>
