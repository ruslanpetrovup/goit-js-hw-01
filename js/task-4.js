let credits = 23580;
const pricePerDroid = 3000;
let number = prompt('Сколько хотите дроидов');
let totalPrice;
if (number === null) {
    console.log('Отменено пользователем!')
} else if (number * pricePerDroid > credits) {
    console.log('Недостаточно средств на счету!')
} else {
    totalPrice = number * pricePerDroid;
    credits -= totalPrice;
    console.log(`Вы купили ${number} дройдов, на счету осталось ${credits} кредитов`);
}