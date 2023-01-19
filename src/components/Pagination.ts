import { store } from '../store';

type PaginationProps = {
  onPageChange: (page: string) => void;
};

export const Pagination = ({ onPageChange }: PaginationProps) => {
  const html = /*html*/ `
    <div id="pagination" class="flex items-center gap-x-1"></div>
  `;

  Promise.resolve().then(() => {
    const el = document.querySelector<HTMLDivElement>('#pagination');

    el?.addEventListener('click', (e) => {
      const closest = (e.target as HTMLElement).closest<HTMLElement>('[data-page]');
      closest?.dataset?.page !== undefined && onPageChange(closest.dataset.page);
    });

    store.addEventListener('change', () => {
      const pages = Array.from({ length: Math.ceil(store.total / store.limit) }, (_, i) => i + 1);

      el?.replaceChildren();

      el?.insertAdjacentHTML(
        'afterbegin',
        pages.map((n) => /*html*/ `<div data-page=${n} class="cursor-pointer">${n}</div>`).join('')
      );
    });
  });

  return html;
};
