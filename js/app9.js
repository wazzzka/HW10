/*
Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] 
Знайти добуток позитивних елементів.
*/

let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let positivesElements = '';
let prodOfPositives = 1;
let countOfPositives = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        positivesElements += array[i] + ", ";
        prodOfPositives *= array[i];
        countOfPositives++;
    }
}

document.write(`<p><b>Дано масив: ${array}</b></p>`)
document.write(`<p>Кількість позитивних елементів: ${countOfPositives}. <br>Це наступні елементи: ${positivesElements.slice(0,-2)}</p>`)
document.write(`<p>Добуток позитивних елементів: <b>${prodOfPositives}</b></p>`)