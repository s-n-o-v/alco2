const cats = [
    { id: 1, name: 'Безалкогольные напитки', parentId: null },
    { id: 2, name: 'Алкогольные напитки', parentId: null },
    { id: 3, name: 'Газированные напитки', parentId: 1 },
    { id: 4, name: 'Горячие напитки', parentId: 1 },
    { id: 5, name: 'Крепкий алкоголь', parentId: 2 },
    { id: 6, name: 'Vodka', parentId: 5 },
    { id: 7, name: 'Слабоалькогольные напитки', parentId: 2 },
    { id: 8, name: 'Пиво', parentId: 7 },
];

const drinks = [
    { id: 1, name: 'Lipton black tea', img: 'https://target.scene7.com/is/image/Target/GUEST_81fafce9-80fc-407c-9e00-049afc68f12f?wid=488&hei=488&fmt=pjpeg', description: 'the fucking lipton', createdDate: '2020-11-30', rate: 5, categoryId: 4},
    { id: 2, name: 'Coca-cola', img: 'https://oasis-msk.ru/images/product_images/popup_images/2121_0.jpg', description: 'Coca-Cola («Кока-Кола») — безалкогольный газированный напиток, производимый компанией «The Coca-Cola Company».', createdDate: '2020-11-30', rate: 3, categoryId: 3},
    { id: 3, name: 'Хадыженское', img: 'https://ooo-pegas.ru/images/hadjinkoe.jpg', description: 'Made in Khadyzhensk', createdDate: '2021-01-13', rate: 2, categoryId: 8},
];

const comments = [
    {id:1, drinkId: 2, commentText: 'Coca-cola - напиток для идиотов', userId: 1, commentDate: '2021-01-15', rate: 5}
];

export default class DummyService {

    getCategories = async () => {
        return new Promise((resolve) => {
            setTimeout(()=>{
                resolve(cats);
            }, 100);
        });
    }

    getItems = async (param) => {
        let filtered = drinks;
        if (param) {
            filtered = drinks.filter(item => item.categoryId == param.categoryId);
        }
        return new Promise((resolve) => {
            setTimeout(()=>{
                resolve(filtered);
            }, 100);
        });
    }

}