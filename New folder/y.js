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


