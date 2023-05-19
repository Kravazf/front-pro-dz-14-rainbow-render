const hero = ['Ivan'];
const native = ['York', 'Of'];
const destination = ['Poltava', 'In'];

// Завдання 1: Об'єднати масиви destination, native, hero в один загальний масив - rainbow ['Richard','Of','York','Gave','Battle','In','Vain'];
let rainbow = [];

// Використання методу .concat()
rainbow = rainbow.concat(hero, native, destination);

console.log(rainbow);
// ['Ivan', 'York', 'Of', 'Poltava', 'In']

// Завдання 2: Обернути елементи у масиві rainbow
rainbow.reverse();

console.log(rainbow);
// ['In', 'Poltava', 'Of', 'York', 'Ivan']

// Завдання 3: Змінити/додати елементи у масиві rainbow
// ['Richard','Of','York','Gave','Battle','In','Vain'];

// видаляємо перший елмент масиву
rainbow.shift();

console.log(rainbow);
// ['Poltava', 'Of', 'York', 'Ivan']

// Змінюємо 1-й і 4-й елемент массиву
rainbow[0] = 'Richard';
rainbow[3] = 'Gave';

console.log(rainbow);
// ['Richard', 'Of', 'York', 'Gave']

// Додаємо 'Battle','In','Vain' в кінець массиву

rainbow.push('Battle','In','Vain');

console.log(rainbow);
// ['Richard', 'Of', 'York', 'Gave', 'Battle', 'In', 'Vain']

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'indigo'];

divCollorsForRainbow  = [];

for (let i = 0; i < rainbow.length; i++) {
    divCollorsForRainbow.push(`<div class="card">
    <div class="circle ${colors[i % colors.length]}"></div>
    <p>${rainbow[i]}</p>
  </div>`)
}

document.write(`
    <div class="wrapp">
    ${divCollorsForRainbow.join('')}
    </div>
`);
 
