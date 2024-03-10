import {AxiosInstance} from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import MockAdapter from 'axios-mock-adapter';
import axiosInstance from '../services/axios.service';
import mockData from '../../mocks/groups.json'
import { adaptServerToClient } from '../adapters/adapt-server-to-client.adapter'
import type { AppDispatchType, StateType, GetGroupsResponse} from '../types';
import { updateGroups } from './action';


const mock = new MockAdapter(axiosInstance, {delayResponse: 1000});
mock.onGet('/groups').reply(200, {result: 1, data: mockData});



export const getGroups = createAsyncThunk<GetGroupsResponse | void, undefined, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance
}>('getGroup', 
  async (_arg, {dispatch, extra: axiosInstance}) => {
    try {
      const {data} = await axiosInstance.get<GetGroupsResponse>('/groups');
      if (data.result === 0 || !(data.data)) {
        throw Error('Group data has not been found');
      }
      dispatch(updateGroups(adaptServerToClient(data.data)))
      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw error.message
      }
    }
  }
)
