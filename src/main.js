import DaysModel from "./models/days";
import DayComponent from "./components/day.js";
import DaysContainerComponent from "./components/days-container.js";
import HeaderComponent from "./components/header.js";
import {DaysOfWeekList, RenderPosition} from "./utils/const.js";
import {render} from "./utils/render.js";


const daysModel = new DaysModel();

const mainContainer = document.querySelector(`main`);
const headerComponent = new HeaderComponent();
render(mainContainer, headerComponent.getElement(), RenderPosition.BEFORE_END);

const daysContainer = new DaysContainerComponent();
render(mainContainer, daysContainer.getElement(), RenderPosition.BEFORE_END);

const dayComponents = daysModel.getDays().map((item, index) => {
  return new DayComponent(item, DaysOfWeekList[index].abbr);
});

dayComponents.forEach((component) => {
  render(daysContainer.getElement(), component.getElement(), RenderPosition.BEFORE_END);

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

  headerComponent.resetData();
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