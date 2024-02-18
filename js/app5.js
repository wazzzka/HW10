/*
Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] 
Знайти кількість непарних позитивних елементів.
*/

let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let oddPositivesElements = '';
let sumOfOddPositives = 0;
let countOfOddPositives = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 !== 0) {
        oddPositivesElements += array[i] + ", ";
        sumOfOddPositives += array[i];
        countOfOddPositives++;
    }
}

document.write(`<p><b>Дано масив: ${array}</b></p>`)
document.write(`<p>Кількість непарних позитивних елементів: ${countOfOddPositives}. <br>Це наступні елементи: ${oddPositivesElements.slice(0,-2)}</p>`)
// document.write(`<p>Сума непарних позитивних елементів: ${sumOfOddPositives}</p>`)