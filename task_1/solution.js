function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;
    let message
    message = productName;
    message = message + " ";
    message = message + "за";
    message = productPrice;
    message = message + " ";
    message = message + "теперь в корзине!";
    return message;
}

function addInCartCountChange(value) {
    let oldValue = value;
    let newValue;
    newValue = oldValue;
    newValue +1;
    return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;
    Let newSam;
    newSam = oldSum + difference;
    let newSumText = newSum + ' ₽';
    newSumText = `${newSum} ₽`;
    return newSumText;
}

