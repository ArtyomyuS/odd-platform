import rootReducer from 'redux/slices';
import { store } from 'redux/store';
import type { ActionType } from 'typesafe-actions';
import * as actions from 'redux/actions';

export * from './state';
export * from './loader';
export * from './dataEntitySearch';
export * from './dataentities';
export * from './datasetStructure';
export * from './dataQualityTest';
export * from './common';
export * from './termSearch';
export * from './dataentityLineage';
export * from './activities';
export * from './alerts';
export * from './graph';
export * from './dataCollaboration';

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export type Action = ActionType<typeof actions>;
