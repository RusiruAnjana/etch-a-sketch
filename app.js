const grid = document.querySelector('#grid');
const sizeE1 = document.querySelector('#size');
let size = sizeE1.value;
const colorE = document.querySelector('#color');
let color = colorE.value;
let rainbowColor = '#ffffff';
let colorSelection = true;
let rainbowSelection = false;
let erasorSelection = false;

let draw = false;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function populate(size){
    grid.style.setProperty('--size',size);
    for(let i = 0; i < size * size; i++){
        const div = document.createElement('div');
        div.classList.add('pixel');
        div.addEventListener('mouseover',function(){
            if(!draw) return;
            if(erasorSelection){
                div.style.backgroundColor = '#2c2c2c';
            }else if(rainbowSelection){
                div.style.backgroundColor = getRandomColor();
            }else{
                div.style.backgroundColor = colorE.value;
            }
            
        });
        div.addEventListener('click',function(){
            
            if(erasorSelection){
                div.style.backgroundColor = '#2c2c2c';
            }else if(rainbowSelection){
                div.style.backgroundColor = getRandomColor();
            }else{
                div.style.backgroundColor = colorE.value;
            }
        });


        grid.appendChild(div);
    }
}

window.addEventListener('mousedown', function(){
    draw=true;
});

window.addEventListener('mouseup', function(){
    draw=false;
});


function reset(){
    grid.innerHTML = '';
    populate(size);
}

sizeE1.addEventListener('change',function(){
    size = sizeE1.value;
    reset();
})

document.querySelector('#btn-reset').addEventListener('click',()=>{
    reset();
});

document.getElementById('btn-color').addEventListener('click',function(){
    colorSelection = true;
    rainbowSelection = false;
    erasorSelection = false;
});

document.getElementById('btn-rainbow').addEventListener('click',function(){
    colorSelection = false;
    rainbowSelection = true;
    erasorSelection = false;
});

document.getElementById('btn-eraser').addEventListener('click',function(){
    colorSelection = false;
    rainbowSelection = false;
    erasorSelection = true;
});

populate(size);

