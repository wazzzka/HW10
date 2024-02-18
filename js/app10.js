/*
Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] 
Знайти найбільший серед елементів масиву, остальні обнулити.
*/


let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let maxElement = array[0];
let maxElementIndex = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > maxElement) {
        maxElement = array[i];
        maxElementIndex = i;
    }
}

for (let i = 0; i < array.length; i++) {
    if (i !== maxElementIndex) {
        array[i] = 0;
    }
}

document.write(`<p><b>Дано масив: 16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47</b></p>`)
document.write(`<p>Максимальний елемент елемент масиву: ${maxElement}.</p>`)
document.write(`<p>Порядковий номер максимального елемента: ${maxElementIndex}</p>`)
document.write(`<p>Масив після обнулення, крім найбільшого елемента: ${array}</p>`)