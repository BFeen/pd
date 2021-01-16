import {createElement} from "../utils/render.js";


const createBtnTemplate = (isHidden) => {
  return (
    `<button class="btn-shuffle ${isHidden ? `hidden` : ``}">&#9733;</button>`
  );
};

export default class ShuffleBtn {
  constructor(isHidden = true) {
    this._element = null;
    this._isHidden = isHidden;

    this.setBtnClickHandler = this.setBtnClickHandler.bind(this);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  getTemplate() {
    return createBtnTemplate(this._isHidden);
  }

  isHidden() {
    return this._isHidden;
  }

  show() {
    if (this._element) {
      this._isHidden = false;
      this._element.classList.remove(`hidden`);
    }
  }

  hide() {
    if (this._element) {
      this._isHidden = true;
      this._element.classList.add(`hidden`);
    }
  }

  setBtnClickHandler(handler) {
    this.getElement().addEventListener(`click`, handler);
  }
}