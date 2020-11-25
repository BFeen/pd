import {RenderPosition} from "./const.js";


const createDayTemplate = (item) => {
  return `<div class="days__item" style="background-color: ${item.color};"></div>`
};

const createElement = (template) => {
// template - JS string with HTML tags

  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const render = (container, component, place) => {
// container - HTML Element
// component - HTML Element
// place - RenderPosition enum

  switch(place) {
    case RenderPosition.AFTER_BEGIN:
      container.prepend(component);
      break;
    case RenderPosition.BEFORE_END:
      container.append(component);
      break;
    case RenderPosition.AFTER_END:
      container.after(component);
      break;
  }
};

export {createDayTemplate, createElement, render};