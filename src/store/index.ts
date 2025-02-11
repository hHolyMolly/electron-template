import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import template from './slices/template';

export const store = configureStore({
  reducer: {
    template,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
