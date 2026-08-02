import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment } from '../../types/Comment';

const initialState = { items: [] as Comment[], loaded: false, hasError: false };

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments(state, action: PayloadAction<Comment[]>) {
      state.items = action.payload;
    },
    setLoaded(state, action: PayloadAction<boolean>) {
      state.loaded = action.payload;
    },
    setError(state, action: PayloadAction<boolean>) {
      state.hasError = action.payload;
    },
  },
});

export const { setComments, setLoaded, setError } = commentsSlice.actions;
export default commentsSlice.reducer;
