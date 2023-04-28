const a = prompt("Введите температуру в градусах Цельсия: ");
alert(`Цельсий: ${a}, Фаренгейт: ${get_temp(a)}.`);
function get_temp(a) {
    return Math.floor(((9 / 5) * a + 32) * 100) / 100;
}
 