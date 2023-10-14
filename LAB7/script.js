console.log("Любое значение")

var a = 4;
var b = 10;

alert(`Переменная a: ${a}
Переменная b: ${b}\n
Сумма a и b: ${a + b}
Разность a и b: ${a - b}
Произведение a и b: ${a * b}
Частное a и b: ${a / b}
Квадрат a: ${a ** 2}
Остаток от деления a на b: ${a % b} `);

alert('верхний'.toUpperCase());
alert('НИЖНИЙ'.toLowerCase());

function showAlert() {
    alert("1 задание:\nКак дела?");
    setTimeout(showAlert, 3000);
  }
showAlert();

function showMessage(from, text) { 
    alert(from + ': ' + text);
}

showMessage('Второе задание', 'Выполнено'); 
