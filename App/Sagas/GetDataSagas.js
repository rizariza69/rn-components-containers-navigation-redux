/* ***********************************************************
 * A short word on how to use this automagically generated file.
 * We're often asked in the ignite gitter channel how to connect
 * to a to a third party api, so we thought we'd demonstrate - but
 * you should know you can use sagas for other flow control too.
 *
 * Other points:
 *  - You'll need to add this saga to sagas/index.js
 *  - This template uses the api declared in sagas/index.js, so
 *    you'll need to define a constant in that file.
 *************************************************************/

import { call, put } from "redux-saga/effects";
import GetDataActions from "../Redux/GetDataRedux";
import { ToastAndroid } from "react-native";
// import { GetDataSelectors } from '../Redux/GetDataRedux'

export function* getGetData(api, action) {
  const { token } = action;
  // get current data from Store
  // const currentData = yield select(GetDataSelectors.getData)
  // make the call to the api
  try {
    const response = yield call(api.getgetData, token);
    console.log("DATA", response);

    // success?
    if (response.ok) {
      // You might need to change the response here - do this with a 'transform',
      // located in ../Transforms/. Otherwise, just pass the data back from the api.
      yield put(
        GetDataActions.getDataSuccess(response.data.error, response.data.data)
      );
    } else {
      yield put(
        GetDataActions.getDataFailure(response.data.error, response.data.data)
      );
    }
  } catch (ex) {
    console.log(ex);
    ToastAndroid.show(
      "Please Check Your Network Connection",
      ToastAndroid.SHORT
    );
  }
}
