import { store } from '../store';
import { Car } from '../types/Car';
import { CarRace } from './CarRace';

type CarListProps = {
  onSelectCar: (id: string) => void;
  onRemoveCar: (id: string) => void;
};

export const CarList = ({ onRemoveCar, onSelectCar }: CarListProps) => {
  const html = /*html*/ `<div id="car-container"></div>`;

  const handleClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const closest = target.closest('[data-id]') as HTMLElement;

    target.dataset.car === 'remove' && onRemoveCar(closest.dataset.id ?? '');
    target.dataset.car === 'select' && onSelectCar(closest.dataset.id ?? '');
  };

  Promise.resolve().then(() => {
    const el = document.querySelector<HTMLDivElement>('#car-container');

    el?.addEventListener('click', handleClick);

    store.addEventListener('change', (e) => {
      el?.replaceChildren();
      el?.insertAdjacentHTML('afterbegin', store.items.map((item: Car) => CarRace(item)).join(''));
    });
  });

  return [html];
};
