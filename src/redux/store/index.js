import { configureStore, combineReducers } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profile-reducer";
import jobsReducer from "../reducers/jobs-reducer";
export const FOLLOW = "FOLLOW";
const bigReducer = combineReducers({
  profile: profileReducer,
  jobs: jobsReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
