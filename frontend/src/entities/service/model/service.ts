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
    image: "services/photo_01.jpg",
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
    image: "services/photo_02.jpg",
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
    image: "services/photo_03.jpg",
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
];