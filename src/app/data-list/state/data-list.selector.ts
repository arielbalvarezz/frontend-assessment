import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";

export const selectDataList = createFeatureSelector<AppState>('data');

export const getDataList = createSelector(
    selectDataList,
    (state: AppState) => state.data
);