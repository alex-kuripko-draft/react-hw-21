import { configureStore } from '@reduxjs/toolkit';
import questionnaire from './questionnaire/slice';

export const store = configureStore({
    reducer: { questionnaire },
});