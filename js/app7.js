/*
Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] 
Знайти суму парних позитивних елементів.
*/

let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let evenPositivesElements = '';
let sumOfEvenPositives = 0;
let countOfEvenPositives = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 === 0) {
        evenPositivesElements += array[i] + ", ";
        sumOfEvenPositives += array[i];
        countOfEvenPositives++;
    }
}

document.write(`<p><b>Дано масив: ${array}</b></p>`)
document.write(`<p>Кількість парних позитивних елементів: ${countOfEvenPositives}. <br>Це наступні елементи: ${evenPositivesElements.slice(0,-2)}</p>`)
document.write(`<p>Сума парних позитивних елементів: <b>${sumOfEvenPositives}</b></p>`)