import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getDataRequest: ["token"],
  getDataSuccess: ["error", "data"],
  getDataFailure: ["error", "data"]
});

export const GetDataTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null,
  token: null
});

/* ------------- Selectors ------------- */

export const GetDataSelectors = {
  getData: state => state.data
};

/* ------------- Reducers ------------- */

// request the data from an api
export const request = state =>
  state.merge({ fetching: true, data: null, error: null });

// successful api lookup
export const success = (state, { error, data }) => {
  return state.merge({ fetching: false, error: false, data });
};

// Something went wrong somewhere.
export const failure = (state, { error, data }) =>
  state.merge({ fetching: false, error: true, data });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_DATA_REQUEST]: request,
  [Types.GET_DATA_SUCCESS]: success,
  [Types.GET_DATA_FAILURE]: failure
});
