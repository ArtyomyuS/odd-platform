import type { AlertsState, Alert, AlertsConfig } from 'redux/interfaces';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { alertsActionPrefix } from 'redux/actions';
import * as thunks from 'redux/thunks';

export const alertsAdapter = createEntityAdapter<Alert>({
  selectId: alert => alert.id,
});

export const alertsConfigAdapter = createEntityAdapter<AlertsConfig>({
  selectId: config => config.dataEntityId,
});

export const initialState: AlertsState = {
  totals: {},
  pageInfo: { total: 0, page: 0, hasNext: true },
  configs: { ...alertsConfigAdapter.getInitialState() },
  ...alertsAdapter.getInitialState(),
};

export const alertsSlice = createSlice({
  name: alertsActionPrefix,
  initialState,
  reducers: {
    changeAlertsFilterAction: alertsAdapter.removeAll,
  },
  extraReducers: builder => {
    builder.addCase(thunks.fetchAlertsTotals.fulfilled, (state, { payload }) => {
      state.totals = payload;
    });
    builder.addCase(thunks.fetchAllAlertList.fulfilled, (state, { payload }) => {
      const { items, pageInfo } = payload;
      alertsAdapter.setMany(state, items);
      state.pageInfo = pageInfo;
    });
    builder.addCase(thunks.fetchMyAlertList.fulfilled, (state, { payload }) => {
      const { items, pageInfo } = payload;
      alertsAdapter.setMany(state, items);
      state.pageInfo = pageInfo;
    });
    builder.addCase(thunks.fetchMyDependentsAlertList.fulfilled, (state, { payload }) => {
      const { items, pageInfo } = payload;
      alertsAdapter.setMany(state, items);
      state.pageInfo = pageInfo;
    });
    builder.addCase(thunks.fetchDataEntityAlerts.fulfilled, (state, { payload }) => {
      const { items, pageInfo } = payload;
      alertsAdapter.setAll(state, items);
      state.pageInfo = { ...pageInfo, page: 1 };
    });
    builder.addCase(thunks.updateAlertStatus.fulfilled, (state, { payload }) => {
      alertsAdapter.setOne(state, payload);
    });
    builder.addCase(
      thunks.fetchDataEntityAlertsConfig.fulfilled,
      (state, { payload }) => {
        alertsConfigAdapter.setOne(state.configs, payload);
      }
    );
    builder.addCase(
      thunks.updateDataEntityAlertsConfig.fulfilled,
      (state, { payload }) => {
        alertsConfigAdapter.setOne(state.configs, payload);
      }
    );
  },
});
export const { changeAlertsFilterAction } = alertsSlice.actions;
export default alertsSlice.reducer;
