let message;
const ADMIN_PASSWORD = 'jqueryismyjam';
let password = prompt("Введите пароль");
if (password === null) {
    message = 'Отменено пользователем!'
} else if (password === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
    alert(message);
} else {
    message = 'Доступ запрещен, неверный пароль!'
}
console.log(message);