import {createElement} from "../utils/render.js";

const EmptyData = {
  name: ``, sphere: ``, num: -1, role: ``,  mission: ``,
  state: ``, word: ``, accent: ``, mood: ``, color: ``,
};

const createHeaderTemplate = (dayInfo) => {
  const {
    name, sphere, num,
    role, mission, state,
    word, accent, mood, color
  } = dayInfo;

  return (
    `<header 
      class="header hidden" 
      style="background-color: ${color}""
    >
      <h1 class="header__title">Предназначение дня: ${name}</h1>

      <div class="day-info">

        <div class="day-info__flexbox day-info__flexbox-vertical">
          <h2 class="day-info__subtitle">${sphere}</h2>
          
          <div class="day-info__num" style="color: ${color}; border-color: ${color}">${num}</div>
        </div>

        <div class="day-info__flexbox">
          <div class="day-info__item">
            <p class="day-info__text"><span>Роль:</span> ${role}</p>
            <p class="day-info__text"><span>Миссия:</span> ${mission}</p>
            <p class="day-info__text"><span>Состояние:</span> ${state}</p>
          </div>
          <div class="day-info__item">
            <p class="day-info__text"><span>Мысль, слово:</span> ${word}</p>
            <p class="day-info__text"><span>Акцент:</span> ${accent}</p>
            <p class="day-info__text"><span>Настрой:</span> ${mood}</p>
          </div>
        </div>
      </div>

    </header>`
  );
};

export default class HeaderComponent {
  constructor() {
    this._dayData = EmptyData;

    this._element = null;
    this._isHidden = true;
  }

  setData(newData) {
    this._dayData = newData;
  }

  getData() {
    return this._dayData;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  getTemplate() {
    return createHeaderTemplate(this._dayData);
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
