// let val = 10;
// let val2 = 20;
// let val3 = val1 + val2;
// console.log(val3); // Output: 30
// let val4 = val1 - val2;
// console.log(val4); // Output: -10
// let val5 = val1 * val2;
// console.log(val5); // Output: 200
// let val6 = val1 / val2;
// console.log(val6); // Output: 0.5
// let val7 = val1 % val2;
// console.log(val7); // Output: 10


const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(button => {
    console.log(button);
  button.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);

    const color = button.getAttribute('data-color');
    body.style.backgroundColor = color;
  });
});