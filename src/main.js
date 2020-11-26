import {daysData} from "./data/days.js";
import {RenderPosition} from "./utils/const.js";
import {createElement, render} from "./utils/render.js";
import createDayTemplate from "./components/day-element.js";


const container = document.querySelector(`.days`);

if (daysData) {
  daysData.forEach((item) => {
    const dayStr = createDayTemplate(item);
    const dayElement = createElement(dayStr);
    render(container, dayElement, RenderPosition.BEFORE_END);
  });
} else {
  const errorElement = createElement(`Something went wrong`);
  render(container, errorElement, RenderPosition.BEFORE_END);
}
