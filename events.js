document.querySelector('.images').addEventListener('click', function(event) {
    console.log(event.target.parentNode);
    let removeit = event.target.parentNode;
    removeit.remove();
    console.log(removeit);
})