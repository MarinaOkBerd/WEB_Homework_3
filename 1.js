const celsius = Number.parseFloat(prompt("Введите температуру в градусах Цельсия: "));
alert(`Цельсий: ${celsius.toFixed(1)}, Фаренгейт: ${getTemp(celsius).toFixed(1)}.`);
function getTemp(a) {
    return Math.floor(((9 / 5) * a + 32));
}
 