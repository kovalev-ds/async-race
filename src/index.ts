import 'minireset.css';
import './styles/main.scss';

import { App } from './App';
import { store } from './store';

document.querySelector<HTMLElement>('#root')?.insertAdjacentHTML('afterbegin', App());

window.addEventListener('DOMContentLoaded', () => {
  store.fetchData(1);
});
