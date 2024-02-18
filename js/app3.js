/*
Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] 
Знайти максимальний елемент масиву та його порядковий номер.
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

document.write(`<p><b>Дано масив: ${array}</b></p>`)
document.write(`<p>Максимальний елемент елемент масиву: ${maxElement}.</p>`)
document.write(`<p>Порядковий номер максимального елемента: ${maxElementIndex}</p>`)


/*
Math.max

const array1 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
const maxElement1 = Math.max(...array1);
console.log(maxElement1);
*/

/*
reduce()

const array2 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
const maxElement2 = array2.reduce((max, current) => {
    return Math.max(max, current);
});
console.log(maxElement2);

*/