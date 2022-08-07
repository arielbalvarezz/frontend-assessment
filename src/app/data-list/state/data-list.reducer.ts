import { createReducer, on } from '@ngrx/store';
import { Data } from 'src/app/models/data';
import { loadDataListSuccess, toggleData } from './data-list.actions';

export interface dataState {
    data: Data[];
}

export const dataInitialState: dataState = {
    data: []
}

export const dataReducer = createReducer(
    dataInitialState,

    /**
     * Load Data List
     * 
     * @param state object - current app state
     * @param data  object - new data object
     * @return object - new app state
     */
    on(loadDataListSuccess, (state, { data }) => ({ ...state, data: data })),

    /**
     * Toggle Data List Item - Will setup the new active section.
     * 
     * @param state object - current app state
     * @param action object - new data object
     * @return object - new app state
     */
    on(toggleData, (state, action) => {
        const updatedData = state.data
            // Set isPreviousOpen
            .map(data => {
                return (data.isOpen === true)
                    ? { ...data, isPreviousOpen: true }
                    : { ...data, isPreviousOpen: false };
            })
            // Set isOpen
            .map(data => {
                return data.id === action.data.id
                    ? action.data
                    : { ...data, isOpen: false };
            }
        );

        return { ...state, data: updatedData };
    })
);