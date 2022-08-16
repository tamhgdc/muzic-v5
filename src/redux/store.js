import { configureStore } from "@reduxjs/toolkit";
import { SongSlice } from "./Slice/SongSlice";
import { SongsSlice } from "./Slice/SongsSlice";
export const store = configureStore({
    reducer: {
        songs: SongsSlice.reducer,
        song: SongSlice.reducer
    },
});