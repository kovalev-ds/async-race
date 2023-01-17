import { connect } from '../store/index';
import { CarRace } from './CarRace';

export const CarList = () => {
  const html = /*html*/ `
    <div id="car-container">

    </div>
  `;

  Promise.resolve()
    .then(() => document.querySelector<HTMLDivElement>('#car-container'))
    .then((container) => {
      connect((state) => {
        container?.replaceChildren();
        container?.insertAdjacentHTML('afterbegin', state.cars.map((item) => CarRace(item)).join(''));
      });
    });

  return [html];
};
