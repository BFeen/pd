const DaysData = [
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
    color: "#1AC8ED",
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
    color: "#33658A",
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
    color: "#241023",
  },
];

export default class DaysModel {
  constructor() {
    this._days = Array.from(DaysData);

    this.shuffle = this.shuffle.bind(this);
  }

  getDays() {
    return this._days;
  }

  shuffle() {
    const days = [].concat(this._days);
    for (let i = days.length - 1; i > 0; i--) {
      const place = Math.floor(Math.random() * (i + 1));
      [days[i], days[place]] = [days[place], days[i]];
    }
    
    this._days = days;

    return this._days;
  }
}
