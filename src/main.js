import {daysData} from "./data/days.js";
import {RenderPosition, DaysOfWeekList} from "./utils/const.js";
import {render} from "./utils/render.js";
import DayComponent from "./components/day.js";
import HeaderComponent from "./components/header.js";



const changeView = (days, dayId) => {
  days.forEach((item) => {
    if (item.num !== dayId && item.isActive()) {
      item.setDefaultView();
    }
  })
};

const today = new Date().getDay() - 1;
const days = daysData.map((item, index) => {
  return new DayComponent(item, DaysOfWeekList[index].abbr);
});

const mainContainer = document.querySelector(`body`);
const daysContainer = mainContainer.querySelector(`.days`);
const headerComponent = new HeaderComponent();

if (daysData) {
  days.forEach((day, index, array) => {
    const dayElement = day.getElement();

    if (index === today) {
      headerComponent.setData(day.getData());
      day.toggleActiveClass();
    }

    render(daysContainer, dayElement, RenderPosition.BEFORE_END);

    day.setDayClickHandler(() => {
      changeView(array, day.getData().num);
      day.toggleActiveClass();

      headerComponent.setData(day.getData());
      const headerElement = headerComponent.getElement();
      render(mainContainer, headerElement, RenderPosition.AFTER_BEGIN);
      headerComponent.rerender();
    });
  });
}
