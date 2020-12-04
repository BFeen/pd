import {createElement} from "../utils/render.js";


const createDayTemplate = (item, dayOfWeek) => {
  return (
    `<div class="days__item" style="background-color: ${item.color.HEX};">
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
  }

  getData() {
    return this._dayData;
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
    if (this._element.classList.contains(activeClass)) {
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
  }

  isActive() {
    return this._isActive;
  }
}