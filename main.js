
const yellowBtn = document.querySelector('.btn');
const pinkBtn = document.querySelector('.btn1');
const redBtn = document.querySelector('.btn2');
const randomBtn = document.querySelector('.btn3');


yellowBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = 'yellow';
});

pinkBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = 'pink';
    
});

redBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red';
});

randomBtn.addEventListener('click', () => {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = getRandomColor();
    randomBtn.style.backgroundColor = newColor;
});


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
yellowBtn.style.backgroundColor='yellow'
pinkBtn.style.backgroundColor='pink'
redBtn.style.backgroundColor='red'
randomBtn.style.backgroundColor=getRandomColor()