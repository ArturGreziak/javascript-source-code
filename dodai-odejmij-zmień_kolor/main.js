const btnUp = document.querySelector('.sizeUp');
const btnDown = document.querySelector('.sizeDown');
const btnColor = document.querySelector('.color');
let p = document.querySelector('p');

let i = 36;

const add = () => {
    i += 4;
    p.style.fontSize = i + "px";
}

const odej = () => {
    i -= 4;
    p.style.fontSize = i + "px";
}

const colorChanger = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    p.style.color = `rgb(${r},${g},${b})`;
}

btnUp.addEventListener('click', add);

btnDown.addEventListener('click', odej);

btnColor.addEventListener('click', colorChanger);