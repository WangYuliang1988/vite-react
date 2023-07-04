import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.ts'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  /**
   * <StrictMode> 是 React 内置组件，用于在开发阶段尽早发现错误。
   *
   * <StrictMode> 会在开发阶段对其包含的组件树启用以下额外的操作：
   *
   *   1. 组件函数会被调用两次以发现由于执行非纯渲染操作而造成的错误；
   *   2. Effects 会被调用两次以发现未执行 Effect 清理造成的错误；
   *   3. 检查组件是否使用了已弃用的 API。
   *
   * <StrictMode> 仅作用于开发阶段，不影响生产构建。
   */
  <React.StrictMode>
    {/* React Redux 提供 <Provider> 组件，用于注入 store 至指定组件。
    一般都是将 store 注入应用顶层组件，以使整个组件树都可以访问 store。*/}
    <Provider store={store}>
      {/* React Router 提供 <RouterProvider> 组件，用于激活路由及相关路由API。 */}
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
