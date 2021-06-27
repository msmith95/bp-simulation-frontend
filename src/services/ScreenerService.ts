import {ref} from "vue";
import axios from "axios";

export interface Screener {
    id: string;
    name: string;
    disorder: string;
    content: ScreenerContent;
    full_name: string;
}

export interface ScreenerContent {
    sections: ScreenerSection[]
    display_name: string;
}

export interface ScreenerSection {
    type: string;
    title: string;
    answers: ScreenerAnswerOption[];
    questions: ScreenerQuestion[];
}

export interface ScreenerAnswerOption {
    title: string;
    value: number;
}

export interface ScreenerQuestion {
    question_id: string;
    title: string;
}

export interface ScreenerAnswer {
    value: number;
    question_id: string;
}

export interface ScreenerResponse {
    answers: ScreenerAnswer[]
}

export function useScreenerService() {
    const loading = ref(true);
    const screener = ref(null as Screener | null)

    const fetchScreener = async (id: string) => {
        loading.value = true;
        try {
            const {data}: { data: Screener } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/screeners/${id}`)
            screener.value = data;
            loading.value = false;
        } catch (e) {
            console.log(e)
            loading.value = false;
        }
    }

    const sendAnswers = async (id: string, response: ScreenerResponse) => {
        try {
            const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/screeners/${id}`, response)
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    }

    return {
        loading,
        screener,
        fetchScreener,
        sendAnswers
    }
}
