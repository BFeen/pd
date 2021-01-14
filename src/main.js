import DaysModel from "./models/days";
import DayComponent from "./components/day.js";
import HeaderComponent from "./components/header.js";
import {DaysOfWeekList, RenderPosition} from "./utils/const.js";
import {render} from "./utils/render.js";


const daysModel = new DaysModel();

const bodyContainer = document.querySelector(`body`);
const daysContainer = document.querySelector(`.days`);
const headerComponent = new HeaderComponent();
render(bodyContainer, headerComponent.getElement(), RenderPosition.AFTER_BEGIN);

const dayComponents = daysModel.getDays().map((item, index) => {
  const day = new DayComponent(item, DaysOfWeekList[index].abbr);
  render(daysContainer, day.getElement(), RenderPosition.BEFORE_END);

  return day;
});

dayComponents.forEach((component) => {
  component.setDayClickHandler(() => {
    const dayData = component.getData();

    changeDaysView(dayData.num);

    if (component.isActive()) {
      if (dayData.num !== headerComponent.getData().num) {
        headerComponent.setData(dayData);
        headerComponent.rerender();
      }
      
      headerComponent.show();
    } else {
      headerComponent.hide();
    }
  });
});

document.querySelector(`body`).addEventListener(`keydown`, (evt) => {
  if (evt.code === `Space`) {
    shuffleDaysData(dayComponents);
    headerComponent.hide();
  }
});

function shuffleDaysData(components) {
  const newData = daysModel.shuffle();

  components.forEach((component, index) => {
    component.setData(newData[index]);
    component.rerender();
  });
}

function changeDaysView(currentDayId) {
  dayComponents.forEach((item) => {
    if (currentDayId !== item.getData().num) {
      item.setDefaultView();
    } else {
      item.toggleActiveClass();
    }
  });
}