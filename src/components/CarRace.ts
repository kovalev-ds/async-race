import { Car } from '../types/Car';
import { CarIcon } from './CarIcon';

export const CarRace = (item: Car) => {
  const icon = CarIcon(item.color);
  const html = /*html*/ `
    <div data-id=${item.id} class="py-2">
      <div class="flex items-center gap-x-1">
        <button data-car="select">select</button>
        <button data-car="remove">remove</button>
        <span>
          ${item.name}  
        </span>
      </div>
      <div class="flex border-b border-b-dashed">

        <div>
          <button data-engine="start">A</button>
          <button data-engine="switch">B</button>
        </div>

        <div>
          ${icon}
        </div>
      </div>
    </div>
  `;

  return html;
};
