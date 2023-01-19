import { CarList } from './components/CarList';
import { CreateForm } from './components/CreateForm';
import { Navbar } from './components/Navbar';
import { Pagination } from './components/Pagination';
import { UpdateForm } from './components/UpdateForm';
import { store } from './store';

const [createForm] = CreateForm({ onSubmit: (data) => store.createItem(data) });
const [updateForm] = UpdateForm({ onSubmit: (data) => store.updateItem(data) });

const [cars] = CarList({
  onSelectCar: (id) => store.selectItem(Number(id)),
  onRemoveCar: (id) => store.deleteItem(Number(id)),
});

const [navbar] = Navbar({
  onRouteChange: (route) => console.log(route),
});

const pagination = Pagination({
  onPageChange: (page) => store.fetchData(Number(page)),
});

export const App = () => {
  const html = /*html*/ `
    <div>
      <div class="container">
      <nav>${navbar}</nav>
      <main id="content">
        <div>
          ${createForm}
          ${updateForm}
        </div>

        <div class="flex items-center gap-x-1">
          <button>race</button>
          <button>reset</button>
          <button>generate cars</button>
        </div>

        <div>
          ${cars}
          ${pagination}
        </div>
      </main>
      </div>
    </div>
  `;

  return html;
};
