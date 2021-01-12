import {createElement} from "../utils/render.js";


const createDayTemplate = (item, dayOfWeek) => {
  return (
    `<div class="days__item" style="background-color: ${item.color};">
      <h2 class="days__text">${dayOfWeek}</h2>
    </div>`
  );
};

export default class DayComponent {
  constructor(dayData, dayOfWeek) {
    this._dayData = dayData;
    this._dayOfWeek = dayOfWeek

    this._element = null;
    this._isActive = false;

    this._clickHandler = null;

    this.setDayClickHandler = this.setDayClickHandler.bind(this);
  }

  getData() {
    return this._dayData;
  }

  setData(newData) {
    this._dayData = newData;
  }

  getTemplate() {
    return createDayTemplate(this._dayData, this._dayOfWeek);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  toggleActiveClass() {
    const activeClass = `days__item_active`;
    if (this._isActive) {
      this._isActive = false;
      this._element.classList.remove(activeClass);
    } else {
      this._isActive = true;
      this._element.classList.add(activeClass);
    }
  }

  setDefaultView() {
    this._isActive = false;
    this._element.classList.remove(`days__item_active`);
  }

  setDayClickHandler(handler) {
    this.getElement().addEventListener(`click`, handler);
    this._clickHandler = handler;
  }

  isActive() {
    return this._isActive;
  }

  // =====================

  removeElement() {
    this._element = null;
  }

  rerender() {
    const oldElement = this.getElement();
    const parentElement = oldElement.parentElement;

    this.removeElement();

    const newElement = this.getElement();
    parentElement.replaceChild(newElement, oldElement);

    this._recoveryListeners();
  }

  _recoveryListeners() {
    this.setDayClickHandler(this._clickHandler);

    if (this._isActive) {
      this.toggleActiveClass();
    }
  }
}