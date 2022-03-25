import { PostState, initialState } from './posts.state';
import { Action, createReducer } from "@ngrx/store";

const _postReducer = createReducer(initialState)

export function postReducer(state: PostState, action: Action) {
  return _postReducer(state, action);
}
