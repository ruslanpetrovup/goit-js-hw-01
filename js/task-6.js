let input;
let total = 0;
while (input !== 0) {
    input = Number(prompt('Введите число'));
    total += input;
    console.log(total)
}
alert(`Общая сумма чисел равна ${total}`);