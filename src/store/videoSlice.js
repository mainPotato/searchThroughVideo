import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    videoData: null,
};

const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        put: (state, action) => {
            state.status = true;
            state.videoData = action.payload;
        },
        deleteVideo: (state, action) => {
            const newVideos = state.videoData.filter(
                (video) => video.path !== action.payload,
            );
            if (newVideos.length === 0) this.state.status = null;
            console.log(newVideos);
            state.videoData = newVideos;
        },
    },
});

export const { put, deleteVideo } = videoSlice.actions;

export default videoSlice.reducer;
