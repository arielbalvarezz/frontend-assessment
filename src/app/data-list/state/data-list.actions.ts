import { createAction, props } from '@ngrx/store';
import { Data } from '../../models/data'

export const loadDataListSuccess = createAction(
    '[data list] load data list success',
    props<{ data: Data[] }>()
);

export const toggleData = createAction(
    '[data list] open data',
    props<{ data: Data }>()
);
