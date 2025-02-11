import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import '@styles/normalize.css';
import '@styles/vars.css';
import '@styles/index.scss';

import App from './App';
import { store } from '@store';

const rootElem = document.getElementById('root') as HTMLDivElement;

if (rootElem) {
  const root: ReactDOM.Root = ReactDOM.createRoot(rootElem);
  root.render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  );
}

import '@styles/tailwind.css';
import '@styles/fonts.css';
