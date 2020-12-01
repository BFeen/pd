import {daysData} from "./data/days.js";
import {RenderPosition, DaysOfWeekList} from "./utils/const.js";
import {createElement, render} from "./utils/render.js";
import createDayTemplate from "./components/day-element.js";
import createHeaderTemplate from "./components/header.js";

const clickDayElementHandler = (evt) => {
  console.log(`click`);
};

const mainContainer = document.querySelector(`body`);
const daysContainer = mainContainer.querySelector(`.days`);

if (daysData) {
  daysData.forEach((item, index) => {
    const dayStr = createDayTemplate(item, DaysOfWeekList[index].abbr);
    const dayElement = createElement(dayStr);
    render(daysContainer, dayElement, RenderPosition.BEFORE_END);
    dayElement.addEventListener(`click`, clickDayElementHandler);
  });
} else {
  const errorElement = createElement(`Something went wrong`);
  render(daysContainer, errorElement, RenderPosition.BEFORE_END);
}