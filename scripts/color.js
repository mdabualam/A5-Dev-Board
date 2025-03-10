let btn = document.getElementById('bg-color');
function random(color){
    return Math.floor(Math.random()*color)
}

function background(){
    const randomColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255)+')';
    document.body.style.backgroundColor = randomColor;
}

btn.addEventListener('click', background);