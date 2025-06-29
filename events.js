document.querySelector('.images').addEventListener('click', function(event) {
    console.log(event.target.parentNode);
    let removeIt = event.target.parentNode;
    // removeIt.remove();
    // console.log(removeIt);
    removeIt.parentNode.removeChild(removeIt);
})