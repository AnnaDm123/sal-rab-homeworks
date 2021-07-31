function calcShipping(sum, min, shipping) {
    let shippingSum;// сумма в корзине
    let freeShippingMinSum = min; // минимальная цена для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки

    // Задание №2.1 Рассчитать доставку

    // создайте переменную shippingSum
    let shippingSum;  
    if (productsSum===0){shippingSum=0};
    if(productsSum>=freeShippingMinSum){shippingSum=0}
    if(productsSum>0 &&  productsSum<freeShippingMinSum){shippingSum=shippingPrice}
    return shippingSum;
}
function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная цена для скидки
    let discountPart = discount; // величина скидки в процентах

    // Задание №2.2 Рассчитать скидку

    // создайте переменную discountPrice
    let discountPrice;
    if(productsSum>=discountMinSum){discountSum=discountPart*productsSum/100}
    else {discountSum=0};
    return discountSum;
}
function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);

    // Задача №2.3. Рассчитать скидки и доставку в корзине

    // создайте переменную totalSum
    let totalSum =productsSum;
    totalSum += -discountSum;
    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!
    totalSum += +shippingSum;

    // создайте переменную freeShipping
    // запишите без использования if или любых других условий:
    // если shippingSum равно нулю, то freeShipping должна быть равна true, иначе freeShipping должна быть равна false

    
    let freeShipping;
    freeShipping = shippingSum===0;
    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}