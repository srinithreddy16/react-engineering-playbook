import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter } from 'react-router-dom';
import { userContext } from './utils/app_context.ts';
import { loggedInUser } from './services/user_information_service.ts';
import { TimeProvider } from './utils/TimeContext.tsx';
import { ThemeProvider } from './utils/ThemeContext.tsx';
import { Provider } from "react-redux";
import { myStore } from "./store/store.ts";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <userContext.Provider value={loggedInUser}>
        <TimeProvider>
          <ThemeProvider>
            <Provider store={myStore}>
              <App />
            </Provider>
          </ThemeProvider>  
        </TimeProvider>
	    </userContext.Provider>
    </BrowserRouter>
  </StrictMode>,
)
