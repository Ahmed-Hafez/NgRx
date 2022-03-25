import { CounterState } from './counter.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";

const counterFeatureSelector = createFeatureSelector<CounterState>('counter');

export const counterSelector = createSelector(counterFeatureSelector, state => state.counter);
export const channelNameSelector = createSelector(counterFeatureSelector, state => state.channelName);
