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

export function useScreenerService() {
    const loading = ref(false);
    const screener = ref({
        "id": "abcd-123",
        "name": "BPDS",
        "disorder": "Cross-Cutting",
        "content": {
            "sections": [
                {
                    "type": "standard",
                    "title": "During the past TWO (2) WEEKS, how much (or how often) have you been bothered by the following problems?",
                    "answers": [
                        {
                            "title": "Not at all",
                            "value": 0
                        },
                        {
                            "title": "Rare, less than a day or two",
                            "value": 1
                        },
                        {
                            "title": "Several days",
                            "value": 2
                        },
                        {
                            "title": "More than half the days",
                            "value": 3
                        },
                        {
                            "title": "Nearly every day",
                            "value": 4
                        }
                    ],
                    "questions": [
                        {
                            "question_id": "question_a",
                            "title": "Little interest or pleasure in doing things?"
                        },
                        {
                            "question_id": "question_b",
                            "title": "Feeling down, depressed, or hopeless?"
                        },
                        {
                            "question_id": "question_c",
                            "title": "Sleeping less than usual, but still have a lot of energy?"
                        },
                        {
                            "question_id": "question_d",
                            "title": "Starting lots more projects than usual or doing more risky things than usual?"
                        },
                        {
                            "question_id": "question_e",
                            "title": "Feeling nervous, anxious, frightened, worried, or on edge?"
                        },
                        {
                            "question_id": "question_f",
                            "title": "Feeling panic or being frightened?"
                        },
                        {
                            "question_id": "question_g",
                            "title": "Avoiding situations that make you feel anxious?"
                        },
                        {
                            "question_id": "question_h",
                            "title": "Drinking at least 4 drinks of any kind of alcohol in a single day?"
                        }
                    ]
                }
            ],
            "display_name": "BDS"
        },
        "full_name": "Blueprint Diagnostic Screener"
    } as null | Screener)

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

    return {
        loading,
        screener,
        fetchScreener
    }
}
