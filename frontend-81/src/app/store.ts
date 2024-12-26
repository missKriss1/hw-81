import { configureStore } from '@reduxjs/toolkit';
import {linksReduser} from "../container/linksSlice.ts";


export const store = configureStore({
    reducer: {
        links: linksReduser,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;