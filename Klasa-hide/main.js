const arrowBtn = document.querySelector('.arrow');
const arrowIcon = document.querySelector('.fas');
const img = document.querySelector('.item1');

arrowBtn.addEventListener('click', function(){
    img.classList.toggle('hide');
});