# awesome-wxj

### 说明
- 前端路由，不需要配置router文件，直接由page目录结构自动生成。详情见[https://zh.nuxtjs.org/guide/routing]


### page页面
- Nuxt.js 根据 pages 目录结构去生成 vue-router 配置，也就是说 pages 目录的结构直接影响路由结构(说明)[https://segmentfault.com/a/1190000007933349]

| 属性名 | 描述 |
| asyncData	| 最重要的一个键, 支持 异步数据处理，另外该方法的第一个参数为当前页面组件的 上下文对象。
| fetch	| 与 asyncData 方法类似，用于在渲染页面之前获取数据填充应用的状态树（store）。不同的是 fetch 方法不会设置组件的数据。详情请参考 关于fetch方法的文档。
| head	| 配置当前页面的 Meta 标签, 详情参考 页面头部配置API。
| layout	| 指定当前页面使用的布局（layouts 根目录下的布局文件）。详情请参考 关于 布局 的文档。
| transition	| 指定页面切换的过渡动效, 详情请参考 页面过渡动效。
| scrollToTop	| 布尔值，默认: false。 用于判定渲染页面前是否需要将当前页面滚动至顶部。这个配置用于 嵌套路由的应用场景。
| validate	| 校验方法用于校验 动态路由的参数。
| middleware	| 指定页面的中间件，中间件会在页面渲染之前被调用， 请参考 路由中间件。