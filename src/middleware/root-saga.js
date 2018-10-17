import woocommerceSaga from "./woocommerce-saga";

const rootSaga = function*() {
  yield [woocommerceSaga()];
};

export default rootSaga;
