import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import newsRequest from "../../services/newsRequest"

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        news: []
    },
    reducers: {
        clearNews: (state) => {
            state.news = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getNews.fulfilled, (state, action) => {
            state.news = action.payload
        })
    }
})

export const getNews = createAsyncThunk(
    'getNews',
    async () => {
        const newsResponse = await newsRequest.getEncoded('news/bicoin')
        if (newsResponse) {
            return newsResponse ?? []
        } else {
            throw 'Error fetch'
        }
    }
)
export const { clearNews } = newsSlice.actions
export default newsSlice.reducer