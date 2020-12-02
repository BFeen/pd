import {daysData} from "./data/days.js";
import {RenderPosition, DaysOfWeekList} from "./utils/const.js";
import {render} from "./utils/render.js";
import DayComponent from "./components/day.js";
import HeaderComponent from "./components/header.js";


const mainContainer = document.querySelector(`body`);
const daysContainer = mainContainer.querySelector(`.days`);

if (daysData) {
  daysData.forEach((item, index) => {
    const day = new DayComponent(item, DaysOfWeekList[index].abbr);
    const dayElement = day.getElement();
    render(daysContainer, dayElement, RenderPosition.BEFORE_END);

    day.setDayClickHandler(() => {
      console.log(day.dayData)
      const headerComponent = new HeaderComponent(day.dayData);
      const headerElement = headerComponent.getElement();
      render(mainContainer, headerElement, RenderPosition.AFTER_BEGIN);
    });
  });
}