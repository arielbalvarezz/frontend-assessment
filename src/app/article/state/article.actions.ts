import { createAction, props } from '@ngrx/store';
import { Article } from 'src/app/models/article';

export const loadArticleSuccess = createAction(
    '[article] load article success',
    props<{ article: Article[] }>()
);