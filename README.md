# 在线TodoList
基本实现了常见待办事项的增删改查操作，由于是在线版本，所以这些操作都是通过异步请求来完成的。除此之外，还实现了事项分级、用户注册及登录的功能。
# 总结
- 使用`react`创建了展示型组件
- 使用`redux`对用户和待办事项数据进行管理，其中使用`redux-thunk`进行异步操作，使用`react-redux`创建容器型组件
- 使用`react-router`完成了简单的路由功能
- 使用`json-server`来提供操作接口，以及对数据进行持久化