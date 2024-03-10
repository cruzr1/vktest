import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui';
import App from './App.tsx'
import { store } from './store'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider>
      <AdaptivityProvider>
          <Provider store={store}>
            <App />
          </Provider>
      </AdaptivityProvider>
    </ConfigProvider>
  </React.StrictMode>,
)
