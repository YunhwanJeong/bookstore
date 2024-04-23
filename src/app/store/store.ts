import { productsSlice } from '@/features/products/slices';
import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

const rootReducer = combineSlices(productsSlice);

type RootState = ReturnType<typeof rootReducer>;

// The store setup is wrapped in `makeStore` to allow reuse
// when setting up tests that need the same store config
const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
  });
  // configure listeners using the provided defaults
  // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
  setupListeners(store.dispatch);
  return store;
};

const store = makeStore();

type AppStore = typeof store;
type AppDispatch = AppStore['dispatch'];

export { makeStore, store };
export type { AppDispatch, AppStore, RootState };
