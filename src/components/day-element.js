const createDayTemplate = (item) => {
  return (
    `<div class="days__item" style="background-color: ${item.color};">
      <h2 class="days__text">Пн</h2>
    </div>`
  );
};

export default createDayTemplate;