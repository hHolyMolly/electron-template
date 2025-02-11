import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ITemplate {
  value: number;
}

const initialState: ITemplate = {
  value: 0,
};

const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    setTemplate: (state, { payload }: PayloadAction<ITemplate['value']>) => {
      state.value = payload;
    },
  },
});

export const { setTemplate } = templateSlice.actions;

export default templateSlice.reducer;
