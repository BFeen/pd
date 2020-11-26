import {daysData} from "./data/days.js";
import {RenderPosition, DaysOfWeekList} from "./utils/const.js";
import {createElement, render} from "./utils/render.js";
import createDayTemplate from "./components/day-element.js";


const container = document.querySelector(`.days`);

if (daysData) {
  daysData.forEach((item, index) => {
    const dayStr = createDayTemplate(item, DaysOfWeekList[index].abbr);
    const dayElement = createElement(dayStr);
    render(container, dayElement, RenderPosition.BEFORE_END);
  });
} else {
  const errorElement = createElement(`Something went wrong`);
  render(container, errorElement, RenderPosition.BEFORE_END);
}
