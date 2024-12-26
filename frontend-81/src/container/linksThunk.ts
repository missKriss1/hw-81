import {createAsyncThunk} from "@reduxjs/toolkit";
import {ILink, LinkWithoutIdAndShirtUrl} from "../types";
import axiosApi from "../axiosApi.ts";

export const sendingOriginalUrl = createAsyncThunk<ILink, LinkWithoutIdAndShirtUrl>(
    'links/sendingOriginalUrl',
    async (link: LinkWithoutIdAndShirtUrl) =>{
        const {data: url} = await axiosApi.post('links', link);
        return url
    }
)