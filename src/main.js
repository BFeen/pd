import DaysModel from "./models/days";
import DayComponent from "./components/day.js";
import DaysContainerComponent from "./components/days-container.js";
import {DaysOfWeekList, RenderPosition} from "./utils/const.js";
import {render} from "./utils/render.js";


const daysModel = new DaysModel();

const mainContainer = document.querySelector(`main`);

const daysContainer = new DaysContainerComponent();
render(mainContainer, daysContainer.getElement(), RenderPosition.BEFORE_END);

const dayComponents = daysModel.getDays().map((item, index) => {
  return new DayComponent(item, DaysOfWeekList[index].abbr);
});

dayComponents.forEach((component) => {
  render(daysContainer.getElement(), component.getElement(), RenderPosition.BEFORE_END);
  
  component.setDayClickHandler(() => {
    console.log(component.getData());
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