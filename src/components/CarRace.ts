import { Car } from '../types/Car';
import { CarIcon } from './CarIcon';

export const CarRace = (item: Car) => {
  const html = /*html*/ `
    <div data-id=${item.id} class="py-2">
      <div class="flex items-center">
        <button>select</button>
        <button>remove</button>
        <span>
          ${item.name}  
        </span>
      </div>
      <div class="flex border-b border-b-dashed">

        <div>
          <button>A</button>
          <button>B</button>
        </div>

        <div>
          ${CarIcon(item.color)}
        </div>
      </div>
    </div>
  `;

  Promise.resolve().then(() => document.querySelector<HTMLDivElement>('#car-container'));

  return html;
};
