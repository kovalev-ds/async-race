import { Garage } from './api/index';
import { Car } from './types/Car';

class Store extends EventTarget {
  total = 7;
  limit = 7;
  page = 1;

  items: Car[] = [];
  selected?: Car;

  private dispatch() {
    this.dispatchEvent(new CustomEvent('change'));
  }

  fetchData(page: number) {
    Garage.fetchAll(page, this.limit)
      .then(({ data, total }) => {
        this.items = data;
        this.total = total ?? this.limit;
        this.page = page;
      })
      .then(() => {
        this.dispatch();
      });
  }

  createItem(item: Omit<Car, 'id'>) {
    Garage.createOne(item)
      .then(() => {
        this.fetchData(this.page);
      })
      .then(() => this.dispatch());
  }

  deleteItem(id: Car['id']) {
    Garage.deleteOne(id)
      .then(() => {
        const nextPage = Math.ceil((this.total - 1) / this.limit);
        this.fetchData(this.page > nextPage ? nextPage : this.page);
      })
      .then(() => this.dispatch());
  }
  selectItem(id: Car['id']) {
    const item = this.items.find((item) => item.id === id);

    if (item) {
      this.selected = item;
      this.dispatch();
    }
  }

  updateItem(item: Omit<Car, 'id'>) {
    this.selected &&
      Garage.updateOne(this.selected?.id, item)
        .then(({ data }) => {
          this.items = this.items.map((item) => (item.id === data.id ? data : item));
          this.selected = undefined;
        })
        .then(() => {
          this.dispatch();
        });
  }
}

export const store = new Store();
