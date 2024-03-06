import { createAction } from '@reduxjs/toolkit';
import { Group } from '../types';

export const getGroupsResponse = createAction<Group[]>('getGroups');