const createDayTemplate = (item, dayOfWeek) => {
  return (
    `<div class="days__item" style="background-color: ${item.color.HEX};">
      <h2 class="days__text">${dayOfWeek}</h2>
    </div>`
  );
};

export default createDayTemplate;
