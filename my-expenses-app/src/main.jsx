import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from "@material-tailwind/react";
import { AuthProvider  } from './context/Authcontext.jsx';

import { Provider } from 'react-redux';
import { store, persistor} from './store.jsx';
import { PersistGate } from 'redux-persist/integration/react'

import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <Provider store={store}>
        <PersistGate persistor={persistor}>
        <App />
        </PersistGate>
        </Provider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
