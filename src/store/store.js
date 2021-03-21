import { configureStore } from '@reduxjs/toolkit'

import todo from './todo'

export const store = configureStore({
    reducer: {
        todo
    }
})
