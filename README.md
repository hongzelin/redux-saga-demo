# redux-saga-demo
redux + redux-saga

#### 总结体会
- 1：使用同步的操作，处理异步的请求；
- 2：使用redux+redux-saga，在入口文件index.js配置saga；
- 3：在saga中，使用takeEvery或者takeLatest在项目启动的时候，监听对应的action，触发对应的action；
- 4：当页面触发了对应的action时，除了会去寻找对应的reducer（找不到也没事），进行操作；也会触发saga监听的action，进行异步请求等操作；


参考：
- https://redux-saga-in-chinese.js.org/docs/advanced/ForkModel.html
- https://github.com/superRaytin/redux-saga-in-chinese
- https://juejin.im/post/58eb4100ac502e006c45d5c9
