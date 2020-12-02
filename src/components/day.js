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
    this.dayData = dayData;
    this._dayOfWeek = dayOfWeek

    this._element = null;
  }

  getTemplate() {
    return createDayTemplate(this.dayData, this._dayOfWeek);
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

  setDayClickHandler(handler) {
    const element = this.getElement();
    element.addEventListener(`click`, handler);
  }
}