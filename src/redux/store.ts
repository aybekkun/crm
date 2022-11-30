import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import storage from "redux-persist/lib/storage";
import home from "./home/slice";
import login from "./login/slice";
import rooms from "./rooms/slice";
import time from "./time/slice";
import lead from "./lead/slice";
import courses from "./courses/slice";
import teachers from "./teachers/slice";
import expenses from "./expenses/slice";
import groups from "./groups/slice";
import lessons from "./lessons/slice";
import students from "./stundents/slice";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = persistReducer(persistConfig, login);
const store = configureStore({
  reducer: {
    login: rootReducer,
    home,
    rooms,
    time,
    lead,
    courses,
    teachers,
    expenses,
    groups,
    lessons,
    students
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
