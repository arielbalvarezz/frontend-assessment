import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";

export const selectBanners = createFeatureSelector<AppState>('banner');

export const getBanners = createSelector(
    selectBanners,
    (state: AppState) => state.banner
);