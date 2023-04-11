import(/* webpackChunkName: "hello_1" */ "./Hello1").then((module) => {
  module.default();
});
import(/* webpackChunkName: "hello_2" */ "./Hello2").then((module) => {
  module.default();
});
