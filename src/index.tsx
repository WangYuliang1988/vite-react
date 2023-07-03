import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.ts'

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
    {/* React Redux 提供 Provider 组件将 store 提供给需要的组件。一般都是将顶层组件放在 Provider 内以使整个应用组件树都可以使用 store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
