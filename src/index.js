import(/* webpackChunkName: "user/[id]/page" */ "./Hello1").then((module) => {
  module.default();
});
import(/* webpackChunkName: "redirect/page"" */ "./Hello2").then((module) => {
  module.default();
});
