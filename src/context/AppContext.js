import { createContext } from 'react';

const initialState = {
    budget: 2000,
    expenses: [
        { id: 12, name: 'shopping', cost: 40 },
        { id: 13, name: 'holiday', cost: 400 },
    ],
};

export const AppContext = createContext();
