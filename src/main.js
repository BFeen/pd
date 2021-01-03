import {DaysData} from "./data/days.js";
import DaysModel from "./models/days";

const daysELementList = document.querySelectorAll(`.days__item`);

const daysModel = new DaysModel(DaysData);

document.querySelector(`body`).addEventListener(`keydown`, (evt) => {
  if (evt.code === `Space`) {
    daysModel.shuffle();
    const days = daysModel.getDays();

    daysELementList.forEach((item, index) => {
      item.style.backgroundColor = `${days[index].color.HEX}`;
    });
  }
})