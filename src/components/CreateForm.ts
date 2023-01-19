type CreateFormProps = {
  onSubmit: (data: { name: string; color: string }) => void;
};

export const CreateForm = ({ onSubmit }: CreateFormProps) => {
  const html = /*html*/ `
    <form id="create-form" class="flex items-center gap-x-2 py-2">
      <input type="text" name="name" placeholder="Title">
      <input type="color" name="color">
      <button>create</button>
    </form>
  `;

  Promise.resolve().then(() => {
    const el = document.querySelector<HTMLFormElement>('#create-form');
    el?.addEventListener('submit', (e) => {
      e.preventDefault();
      const target = e.target as HTMLFormElement;

      onSubmit(Object.fromEntries(new FormData(target)) as { name: string; color: string });

      target.reset();
    });
  });

  return [html];
};
