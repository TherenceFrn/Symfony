<template>
    <div>
        <div v-if="currentQuestion">
            <h2 class="text-2xl font-bold mb-4">{{ currentQuestion.title }}</h2>
            <ul class="mb-4">
                <li v-for="answer in currentQuestion.answers" :key="answer.id" class="mb-2">
                    <label>
                        <input type="radio" :value="answer.id" v-model="selectedAnswer" />
                        {{ answer.title }}
                    </label>
                </li>
            </ul>
            <button @click="nextQuestion" class="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-200">Next</button>
        </div>
        <div v-else>
            <h2 class="text-2xl font-bold mb-4">Quiz Complete!</h2>
            <button @click="submitResults" class="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-200">Submit Results</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        questions: Array,
        quizzId: Number,
    },
    data() {
        return {
            currentIndex: 0,
            selectedAnswer: null,
            results: [],
        };
    },
    computed: {
        currentQuestion() {
            return this.questions[this.currentIndex];
        },
    },
    methods: {
        nextQuestion() {
            if (this.selectedAnswer !== null) {
                this.results.push({ question: this.currentQuestion.id, answer: this.selectedAnswer });
                this.selectedAnswer = null;
                this.currentIndex++;
            }
        },
        submitResults() {
            fetch(`/quizz/${this.quizzId}/results`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.results),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        },
    },
    mounted() {
        console.log('QuizApp component has been mounted!');
    },
};
</script>

<style scoped>
/* Add any scoped styles here */
</style>