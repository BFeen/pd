import {createElement} from "../utils/render.js";


const createDaysTemplate = () => {
  return `<section class="days"></section>`;
}

export default class DaysContainerComponent {
  constructor() {
    this._element = null;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  getTemplate() {
    return createDaysTemplate();
  }

  removeElement() {
    this._element = null;
  }

  rerender() {
    const oldElement = this.getElement();
    const parentElement = oldElement.parentElement;

    this.removeElement();

    const newElement = this.getElement();
    parentElement.replaceChild(newElement, oldElement);
  }
}
