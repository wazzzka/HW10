/*
Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] 
Знайти мінімальний елемент масиву та його порядковий номер.
*/


let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let minElement = array[0];
let minElementIndex = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] < minElement) {
        minElement = array[i];
        minElementIndex = i;
    }
}

document.write(`<p><b>Дано масив: ${array}</b></p>`)
document.write(`<p>Мінімальний елемент масиву: ${minElement}.</p>`)
document.write(`<p>Порядковий номер мінімального елемента: ${minElementIndex}</p>`)

/*
// Math.min

const array1 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

function calculateMin(array) {
    return Math.min(...array1);
}
console.log(calculateMin());
*/

/*
// reduce()


const array2 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
function calculateMin(array2) {
  return array.reduce((min, current) => {
    return current < min ? current : min;
  }, array[0]);
}
console.log(calculateMin());

// */