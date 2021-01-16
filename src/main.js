import DaysModel from "./models/days";
import DayComponent from "./components/day.js";
import HeaderComponent from "./components/header.js";
import ShuffleBtn from "./components/shuffle-btn.js";
import {DaysOfWeekList, RenderPosition} from "./utils/const.js";
import {render} from "./utils/render.js";


const daysModel = new DaysModel();

const mainContainer = document.querySelector(`main`);
const daysContainer = document.querySelector(`.days`);
const shuffleBtn = new ShuffleBtn(!isMobileView());
render(mainContainer, shuffleBtn.getElement(), RenderPosition.AFTER_END);

const headerComponent = new HeaderComponent();
render(mainContainer, headerComponent.getElement(), RenderPosition.AFTER_BEGIN);

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
      
      if (isMobileView()) {
        shuffleBtn.hide();
      }
    } else {
      headerComponent.hide();
      
      if (isMobileView()) {
        shuffleBtn.show();
      }
    }
  });
});

shuffleBtn.setBtnClickHandler(() => {
  shuffleDaysHandler();
});

document.querySelector(`body`).addEventListener(`keydown`, (evt) => {
  if (evt.code === `Space`) {
    shuffleDaysHandler();
  }
});

window.addEventListener(`resize`, () => {
  if (isMobileView() && shuffleBtn.isHidden() && headerComponent.isHidden()) {
    shuffleBtn.show();
  } else if (!isMobileView() && !shuffleBtn.isHidden()) {
    shuffleBtn.hide();
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

function shuffleDaysHandler() {
  shuffleDaysData(dayComponents);
  headerComponent.hide();
}

function isMobileView() {
  return window.screen.width < 800;
}