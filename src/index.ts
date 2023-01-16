import 'minireset.css';
import './styles/main.scss';

import { Garage, Winners, Engine } from './api/index';
import { dispatch, connect } from './store/index';
import { UI } from './UI';

const App = document.createElement('div');

connect((state) => console.log('connected state:', state));

Garage.fetchAll(1, 7).then(({ data }) => {
  dispatch({ type: 'init', payload: data });
});

Garage.createOne({ name: 'Lada Calina', color: '#fede00' }).then((data) => {
  console.log(data);
});

const button = UI.create('button', {
  events: {
    click: (e) => {
      Garage.createOne({ name: 'Lada Calina', color: '#fede00' }).then((data) => {
        dispatch({ type: 'create', payload: data.data });
      });
    },
  },
  html: 'click',
});

App.append(button);

document.querySelector<HTMLElement>('#root')?.append(App);
