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

const randomize = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};

const mainContainer = document.querySelector(`body`);

mainContainer.addEventListener(`keydown`, (evt) => {
  if (evt.code === `Space`) {
    randomize(days);
    console.log(days);
  }
});

const getDaysList = (data) => {
  return data.map((item, index) => {
    return new DayComponent(item, DaysOfWeekList[index].abbr);
  });
};

const today = new Date().getDay() - 1;
const days = getDaysList(daysData);

console.log(days);

const daysContainer = mainContainer.querySelector(`.days`);
const headerComponent = new HeaderComponent(days[today].getData());
const headerElement = headerComponent.getElement();
render(mainContainer, headerElement, RenderPosition.AFTER_BEGIN);

if (daysData.length > 0) {
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
      headerComponent.rerender();
    });
  });
}