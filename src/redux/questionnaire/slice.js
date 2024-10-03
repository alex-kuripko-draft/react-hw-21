import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    questions: [
        {
            id: 1,
            question: 'Question 1',
            answers: ['Option 1', 'Option 2'],
            correctAnswer: 'Option 1',
            selectedAnswer: null,
        },
        {
            id: 2,
            question: 'Question 2',
            answers: ['Option 1', 'Option 2'],
            correctAnswer: 'Option 2',
            selectedAnswer: null,
        },
        {
            id: 3,
            question: 'Question 3',
            answers: ['Option 1', 'Option 2'],
            correctAnswer: 'Option 1',
            selectedAnswer: null,
        },
        {
            id: 4,
            question: 'Question 4',
            answers: ['Option 1', 'Option 2'],
            correctAnswer: 'Option 2',
            selectedAnswer: null,
        },
        {
            id: 5,
            question: 'Question 5',
            answers: ['Option 1', 'Option 2'],
            correctAnswer: 'Option 2',
            selectedAnswer: null,
        },
    ],
    result: null,
};

const questionnaireSlice = createSlice({
    name: 'questionnaire',
    initialState,
    reducers: {
        answerQuestion: (state, {payload}) => {
            const {id, answer} = payload;
            const question = state.questions.find((question) => question.id === id);
            
            if (question) {
                question.selectedAnswer = answer;
            }
        },
        submitAnswers: (state) => {
            state.result = state.questions.reduce((acc, question) => {
                return acc + (question.correctAnswer === question.selectedAnswer ? 1 : 0);
            }, 0);
        },
    },
});

export const {answerQuestion, submitAnswers} = questionnaireSlice.actions;

export default questionnaireSlice.reducer;