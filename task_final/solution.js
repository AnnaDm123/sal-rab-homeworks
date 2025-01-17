// Исправьте функцию sendRequest
// Аргументы функции:
// - имя клиента
// - телефон клиента
// - объект с адресом доставки: {street, house, entrance, floor, flat}
// - список товаров в заказе
// - стоимость заказа с учетом скидок и доставки
// Как результат функции требуется вернуть JSON,
// cформированный в соответствии с правилами:
// Объект data содержит все данные
// В объекте data есть свойства:
// - client - строка, имя клиента + через дефис телефон клиента;
// - client - строка, имя клиента + телефон клиента;
// - order - объект, содержащий данные о заказе:
// - address - адрес доставки
// - address - строка с адресом доставки, записанным человекопонятным языком (как в примере)
// - sum - стоимость заказа с учетом скидок и доставки
// - goods: массив объектов с информацией о позициях заказа:
// - title - название позиции
// - count - количество в заказе
// например:
// {
// "data": {
// "client": "Иван +7(987)65-43-210",
// "order": {
// "address": "ул. Ленина, дом 2, 4 подъезд, 5 этаж, кв 53",
// "sum": 900
//       },
// "goods": [
//         {
// "title": "Пицца",
// "count": 2
//         }
//      ]
//    }
// }
function sendRequest(name, phone, address, goods, sum) {
    let client = name + " " + phone;
    let addressForSend = "ул. " + address.street + ", дом " + address.house + ", " + address.entrance + " подъезд, " + address.floor + " этаж, кв " + address.flat;
    let order = { address: addressForSend, sum: sum };
    let GFS = [];
    let count2 = goods.length;

    for (let i = 0; i < count2; i++) {
        let good = { title: goods[i].title, count: goods[i].count };
        GFS.push(good);
    }

    let data = { client:client, order:order, goods:GFS };
    let dataForSend = { data : data };
    let jsonData = JSON.stringify(dataForSend);

    return jsonData;
}