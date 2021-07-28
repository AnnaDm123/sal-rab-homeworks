function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;
    let message = productName;
    message += " " + "за" + " " + productPrice + " " + "теперь в корзине!";
    return message;
}

function addInCartCountChange(value) {
    let oldValue = value;
    let newValue = oldValue;
    newValue = newValue + 1;
    return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;
    let newSum = oldSum + difference;
    let newSumText = newSum + " ₽";
    return newSumText;
}