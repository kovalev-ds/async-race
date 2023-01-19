import { store } from '../store';

type UpdateFormProps = {
  onSubmit: (data: { name: string; color: string }) => void;
};

export const UpdateForm = ({ onSubmit }: UpdateFormProps) => {
  const html = /*html*/ `
    <form id="update-form" class="flex items-center gap-x-2">
      <input type="text" name="name" placeholder="Title">
      <input type="color" name="color" color="#000000">
      <button type="submit">update</button>
    </form>
  `;

  Promise.resolve().then(() => {
    const el = document.querySelector<HTMLFormElement>('#update-form');

    el?.addEventListener('submit', (e) => {
      e.preventDefault();
      const target = e.target as HTMLFormElement;

      onSubmit(Object.fromEntries(new FormData(target)) as { name: string; color: string });
    });

    store.addEventListener('change', () => {
      const name = el?.querySelector<HTMLInputElement>('[name="name"]');
      name && (name.value = store.selected?.name ?? '');

      const color = el?.querySelector<HTMLInputElement>('[name="color"]');
      color && (color.value = store.selected?.color ?? '#000000');
    });
  });

  return [html];
};
