export interface Service {
    id:number;
    title: string;
    types: string[];
    price: string;
    link:string;
}

export const services:Service[] = [
    { 
        id: 1,
        title: "Веб-дизайн", 
        types: [
            "Сайт визитка",
            "Landing pages",
            "Сайт услуг",
            "Корпоративный сайт",
            "+Адаптив",
        ],
        price: "9990",
        link:""
    },
    { 
        id:2,
        title: "Графический дизайн", 
        types: [
            "Инфографика",
            "Иконки",
            "Баннеры",
            "Разработка логотипа",
            "Разработка фирменного стиля",
        ],
        price: "1990",
        link:""
    },
    { 
        id: 3,
        title: "Дизайн полиграфии", 
        types: [
            "Постер или плакат",
            "Меню",
            "Визитки",
            "Прайс-листы",
            "Флаеры",
        ],
        price: "2990",
        link:""
    },
];