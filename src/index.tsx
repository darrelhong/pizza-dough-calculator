/* @refresh reload */
import './index.css';
import { render } from 'solid-js/web';

import App from './App';
import { initialiseTheme } from './utils/dark-mode';

initialiseTheme();

const root = document.getElementById('root');

render(() => <App />, root!);
