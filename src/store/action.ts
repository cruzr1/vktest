import { createAction } from '@reduxjs/toolkit';
import { Group } from '../types';

export const updateGroups = createAction<Group[]>('updateGroups');