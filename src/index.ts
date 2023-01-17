import 'minireset.css';
import './styles/main.scss';

import { connect } from './store/index';
import { create, init, update } from './store/actions';
import { CarRace } from './components/CarRace';
import { Car } from './types/Car';
import { CreateForm } from './components/CreateForm';
import { CarList } from './components/CarList';

connect((state) => {
  console.log('connected state:', state);
});

const [form] = CreateForm({ onSubmit: (data) => create(data) });
const [cars] = CarList();

const App = /*html*/ `
  <div>
    <div class="container">
      <div>
        <button>to garage</button>
        <button>to winners</button>
      </div>

      <div>
        ${form}
      </div>

      <div>
        ${cars}
      </div>
     
    </div>
  </div>

`;

document.querySelector<HTMLElement>('#root')?.insertAdjacentHTML('afterbegin', App);

window.addEventListener('DOMContentLoaded', () => {
  init();
});
