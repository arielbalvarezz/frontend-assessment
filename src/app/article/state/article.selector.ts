import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";

export const selectArticles = createFeatureSelector<AppState>('article');

export const getArticles = createSelector(
    selectArticles,
    (state: AppState) => state.article
);