type Options = {
  className: string;
  html: string;
  events: Record<string, <T extends Event>(e: T) => void>;
};

export class UI {
  static create(tag: string, options: Partial<Options>) {
    const el = document.createElement(tag);

    // options.className ?? el.setAttribute('class', options.className);

    el.innerHTML = options.html ?? '';

    options.events &&
      Object.entries(options.events).forEach(([key, fn]) => {
        el.addEventListener(key, fn);
      });

    return el;
  }
}
