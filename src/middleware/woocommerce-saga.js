import { takeEvery } from "redux-saga";
import { put } from "redux-saga/effects";
// import axios from 'axios';
// import { hashHistory } from 'react-router';
import * as actions from "../action/woocommerce-action";
import WooCommerceAPI from "woocommerce-api";

// import {
//   USER_REST_API_URL
// } from '../const';
// import { configWithCancelToken } from './saga-utils';
// import { addFiltersToUrl } from '../utils';

const WooCommerce = new WooCommerceAPI({
  url: "https://pestrokot.ru", // Your store URL
  consumerKey: process.env.WOOCOMMERCE_KEY, // Your consumer key
  consumerSecret: process.env.WOOCOMMERCE_SECRET, // Your consumer secret
  wpAPI: true, // Enable the WP REST API integration
  version: "wc/v2" // WooCommerce WP REST API version
});

// function* getUser(action) {
//   const user = yield axios.get(
//     `${USER_REST_API_URL}/${action.payload}`,
//     configWithCancelToken()
//   );

//   if (user) yield put(actions.getUser.success(user.data));
// }

// function* updateUser(action) {
//   const user = yield axios.put(
//     `${USER_REST_API_URL}/${action.payload._id}`,
//     action.payload.body,
//     configWithCancelToken()
//   );

//   if (user) yield put(actions.updateUsers.success(user.data));
// }

// function* createUser(action) {
//   const user = yield axios.post(
//     USER_REST_API_URL,
//     action.payload.body.user,
//     configWithCancelToken()
//   );

//   if (user) {
//     yield put(actions.createUser.success(user.data));
//     action.payload.body.callback(user.data);
//   }
// }

function* getProducts() {
  // TODO Перенести проверку юзеров с пустыми именами (не до конца прошли регистрацию) на сервер

  // const users = yield axios.get(USER_REST_API_URL, configWithCancelToken());

  // if (users) yield put(actions.getUsers.success(users));

  WooCommerce.get("products", function(err, data, res) {
    console.log(res);
  });
}

export default function* woocommerceSaga() {
  yield takeEvery(actions.getProducts.REQUEST, getProducts);
}
