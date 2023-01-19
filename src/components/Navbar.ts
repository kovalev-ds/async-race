type NavbarProps = {
  onRouteChange: (route: string) => void;
};
export const Navbar = ({ onRouteChange }: NavbarProps) => {
  const html = /*html*/ `
    <div id="navbar" class="flex items-center py-2 gap-x-2">
      <button data-route="garage">to garage</button>
      <button data-route="winners">to winners</button>
    </div>
  `;

  Promise.resolve()
    .then(() => document.querySelector<HTMLDivElement>('#navbar'))
    .then((el) => {
      el?.addEventListener('click', (e) => {
        const { dataset } = e.target as HTMLElement;
        dataset.route !== undefined && onRouteChange(dataset.route);
      });
    });

  return [html];
};
