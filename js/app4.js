/*
Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] 
Визначити кількість негативних елементів.
*/
let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let negativesElements = '';
let sumOfNegatives = 0;
let countOfNegatives = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        negativesElements += array[i] + ", ";
        sumOfNegatives += array[i];
        countOfNegatives++;
    }
}

document.write(`<p><b>Дано масив: ${array}</b></p>`)
document.write(`<p>Кількість негативних елементів: ${countOfNegatives}. <br>Це наступні елементи: ${negativesElements.slice(0,-2)}</p>`)
document.write(`<p>Сума позитивних елементів: ${sumOfNegatives}</p>`)