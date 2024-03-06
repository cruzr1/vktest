import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { getGroupsResponse } from './action';
import { Group } from '../types'

type initialStateType = {
  groups: Group[]
}

const initialState: initialStateType = {
  groups: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getGroupsResponse, (state, {payload}) => {
      state.groups = payload;
    })
})
