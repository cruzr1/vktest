import { createReducer } from '@reduxjs/toolkit';
import { updateGroups } from './action';
import { Group } from '../types'

type initialStateType = {
  groups: Group[]
}

const initialState: initialStateType = {
  groups: [] 
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateGroups, (state, {payload}) => {
      state.groups = payload;
    })
})
