// 自定义动态路由规则
module.exports = {
  "/api/": "/",
  "/:id": "news/:id",
  "/news/:id/show": "/news/:id",
  "/topics/:id/show": "/news/:id"
}
