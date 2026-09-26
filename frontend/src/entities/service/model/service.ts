export interface ServiceType {
  name: string;
  price: string;
}

export interface Service {
  id: number;
  title: string;
  types: ServiceType[];
  price: string;
  link: string;
  image: string;
  position: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Веб-дизайн",
    image: "services/photo_01.png",
    position: "left",
    types: [
      {
        name: "Сайт-визитка",
        price: "15 000",
      },
      {
        name: "Landing page",
        price: "20 000",
      },
      {
        name: "Сайт услуг",
        price: "30 000",
      },
      {
        name: "Корпоративный сайт",
        price: "40 000",
      },
      {
        name: "Адаптивная версия",
        price: "5 000",
      },
    ],
    price: "15 000",
    link: "/price",
  },

  {
    id: 2,
    title: "Графический дизайн",
    image: "services/photo_02.png",
    position: "right",
    types: [
      {
        name: "Инфографика",
        price: "1 500",
      },
      {
        name: "Иконки",
        price: "500",
      },
      {
        name: "Баннеры",
        price: "1 500",
      },
      {
        name: "Разработка логотипа",
        price: "5 000",
      },
      {
        name: "Фирменный стиль",
        price: "15 000",
      },
    ],
    price: "500",
    link: "/price",
  },

  {
    id: 3,
    title: "Дизайн полиграфии",
    image: "services/photo_03.png",
    position: "left",
    types: [
      {
        name: "Постер или плакат",
        price: "2 000",
      },
      {
        name: "Меню",
        price: "2 000",
      },
      {
        name: "Визитки",
        price: "1 500",
      },
      {
        name: "Прайс-листы",
        price: "2 000",
      },
      {
        name: "Флаеры",
        price: "1 500",
      },
    ],
    price: "1 500",
    link: "/price",
  },

  {
    id: 4,
    title: "Веб-разработка",
    image: "services/photo_04.png",
    position: "right",
    types: [
      {
        name: "Верстка сайта",
        price: "5 000",
      },
      {
        name: "Landing page",
        price: "20 000",
      },
      {
        name: "Многостраничный сайт",
        price: "35 000",
      },
      {
        name: "Frontend-разработка",
        price: "2 000",
      },
      {
        name: "Backend-разработка",
        price: "3 000",
      },
      {
        name: "Доработка сайта",
        price: "1 500",
      },
    ],
    price: "5 000",
    link: "/price",
  },
];