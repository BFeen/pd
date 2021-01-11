import DaysModel from "./models/days";
import DayComponent from "./components/day.js";
import DaysContainerComponent from "./components/days-container.js";
import HeaderComponent from "./components/header.js";
import {DaysOfWeekList, RenderPosition} from "./utils/const.js";
import {render} from "./utils/render.js";


const daysModel = new DaysModel();

const mainContainer = document.querySelector(`main`);
const headerComponent = new HeaderComponent(daysModel.getTodayData());
render(mainContainer, headerComponent.getElement(), RenderPosition.BEFORE_END);

const daysContainer = new DaysContainerComponent();
render(mainContainer, daysContainer.getElement(), RenderPosition.BEFORE_END);

const dayComponents = daysModel.getDays().map((item, index) => {
  return new DayComponent(item, DaysOfWeekList[index].abbr);
});

dayComponents.forEach((component, index) => {
  render(daysContainer.getElement(), component.getElement(), RenderPosition.BEFORE_END);

  component.setDayClickHandler(() => {
    const dayData = component.getData();

    changeDaysView(dayData.num);
    component.toggleActiveClass();

    headerComponent.setData(dayData);
  });
});

document.querySelector(`body`).addEventListener(`keydown`, (evt) => {
  if (evt.code === `Space`) {
    shuffleDaysData(dayComponents);
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
  // headerComponent.hide();
  dayComponents.forEach((item) => {
    if (currentDayId !== item.num) {
      item.setDefaultView();
    }
  });
}