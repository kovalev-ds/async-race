type UpdateFormProps = {
  onSubmit: (data: { name: string; color: string }) => void;
};

export const UpdateForm = ({ onSubmit }: UpdateFormProps) => {
  const html = /*html*/ `
    <form id="create-form">
      <input type="text" name="name" placeholder="Title">
      <input type="color" name="color">
      <button>create</button>
    </form>
  `;

  const form = Promise.resolve().then(() => document.querySelector<HTMLFormElement>('#create-form'));

  form.then((el) => {
    el?.addEventListener('submit', (e) => {
      e.preventDefault();
      const target = e.target as HTMLFormElement;

      onSubmit(Object.fromEntries(new FormData(target)) as { name: string; color: string });

      target.reset();
    });
  });

  return [html];
};
