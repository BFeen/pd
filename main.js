const daysData = [
  {
    name: "Красота и Здоровье",
    sphere: "Физическая сфера",
    num: 1,
    role: "Красотка, Дикарка",
    mission: "Наслаждаться собой",
    state: "Принятие",
    word: "Красота",
    accent: "Тепло, Лицо, Здоровье",
    mood: "Женственный",
    time_spending: "Со старшей дочерью",
    color: "#BA2020",
  }, {
    name: "Любовь и Романтика",
    sphere: "Любовная сфера",
    num: 2,
    role: "Кокетка, Любовница",
    mission: "Любить",
    state: "Дарение",
    word: "Страсть, любовь",
    accent: "Чувственность",
    mood: "Романтичный",
    time_spending: "С мужем",
    color: "#FF4A1C",
  }, {
    name: "Общение",
    sphere: "Событийная сфера",
    num: 3,
    role: "Королева, Тусовщица",
    mission: "Сиять, общаться",
    state: "Взаимодействие",
    word: "Радость",
    accent: "Социум, Общение",
    mood: "Праздничный",
    time_spending: "С семьёй, с друзьями",
    color: "#FFAE03",
  }, {
    name: "Дом, Семья",
    sphere: "Семейная сфера",
    num: 4,
    role: "Мама, Жена, Домохозяйка",
    mission: "Создавать уют, порядок",
    state: "Очищение",
    word: "Нежность, уют",
    accent: "Дом, Материнство",
    mood: "Домашний",
    time_spending: "С младшей дочерью",
    color: "#3E5622",
  }, {
    name: "Творчество",
    sphere: "Личностная сфера",
    num: 5,
    role: "Творец и Муза",
    mission: "Создавать, вдохновлять",
    state: "Наполнение",
    word: "Вдохновение",
    accent: "Душа, Связь с космосом",
    mood: "Креативный",
    time_spending: "С сыном",
    color: "#97EFE9",
  }, {
    name: "Дела",
    sphere: "Бизнес сфера",
    num: 6,
    role: "Бизнес-леди, Ученица",
    mission: "Анализировать, Изучать",
    state: "Расширение",
    word: "Интерес",
    accent: "Голова, Ум",
    mood: "Деловой",
    time_spending: "С проектом 'Я'",
    color: "#537DA2",
  }, {
    name: "Тайна",
    sphere: "Духовная сфера",
    num: 7,
    role: "Нет ролей, Нет масок",
    mission: "Тайна",
    state: "Обнуление",
    word: "Чудеса",
    accent: "Carpe Diem",
    mood: "Раскроется в моменте",
    time_spending: "Тайна",
    color: "#241023",
  },
]

const RenderPosition = {
  AFTER_BEGIN: `afterbegin`,
  AFTER_END: `afterend`,
  BEFORE_END: `beforeend`,
};

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

const container = document.querySelector(`.days`);

daysData.forEach((item) => {
  const dayStr = createDayTemplate(item);
  const dayElement = createElement(dayStr);
  console.log(dayElement)
  render(container, dayElement, RenderPosition.BEFORE_END);
});
