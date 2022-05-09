import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchShortLink = createAsyncThunk(
    'links/fetchShortLink',
    async (link, {rejectWithValue, dispatch}) => {
        try {
            const response = await fetch('https://api.shrtco.de/v2/shorten?url='+link);
            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const linksSlice = createSlice({
    name: 'links',
    initialState: {
        links: JSON.parse(localStorage.getItem('shortens')) || []
    },
    reducers: {},
    extraReducers: {
        [fetchShortLink.fulfilled]: (state, action) => {
            state.links.push({
                original: action.payload.result.original_link,
                short: action.payload.result.full_short_link
            });

            localStorage.setItem('shortens', JSON.stringify( state.links));
        },
        [fetchShortLink.rejected]: (state, action) => {
            console.log(action.payload);
        }
    }
});

export default linksSlice.reducer
export const {} = linksSlice.actions