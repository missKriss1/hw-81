import {ILink} from "../types";
import {createSlice} from "@reduxjs/toolkit";
import {sendingOriginalUrl} from "./linksThunk.ts";
import {RootState} from "../app/store.ts";

interface LinksState {
    link : ILink | null
    loading: boolean
}

const initialState: LinksState = {
    link: null,
    loading: false,
}

export const selectLink = (state: RootState) => state.links.link
export const loading = (state: RootState) => state.links.loading

const linkSlice = createSlice({
    name: "links",
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder
            .addCase(sendingOriginalUrl.pending, (state) =>{
                state.loading = true
            })
            .addCase(sendingOriginalUrl.fulfilled, (state, {payload: linkUrl}) =>{
               state.loading = false;
               state.link = linkUrl
            })
            .addCase(sendingOriginalUrl.rejected, (state) =>{
                state.loading = false;
            })
    },
})

export const linksReduser = linkSlice.reducer;