import {createElement} from "../utils/render.js";


const createHeaderTemplate = (dayInfo) => {
  const {
    name,
    sphere,
    num,
    role,
    mission,
    state,
    word,
    accent,
    mood,
    color
  } = dayInfo;

  return (
    `<header 
      class="header header_open" 
      style="background-color: ${color.HEX}""
    >
      <h1 class="header__title-active">Предназначение дня: ${name}</h1>

      <div class="day-info">

        <div class="day-info__flexbox day-info__flexbox-vertical">
          <h2 class="day-info__subtitle">${sphere}</h2>
        </div>

        <div class="day-info__flexbox">
          <div class="day-info__item">
            <p class="day-info__text"><span>Роль:</span> ${role}</p>
            <p class="day-info__text"><span>Миссия:</span> ${mission}</p>
            <p class="day-info__text"><span>Состояние:</span> ${state}</p>
          </div>
          <div class="day-info__num" style="color: ${color.HEX}; border-color: ${color.HEX}">${num}</div>
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
  constructor(dayData) {
    this._dayData = dayData;

    this._element = null;
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

  removeElement() {
    this._element = null;
  }
}
