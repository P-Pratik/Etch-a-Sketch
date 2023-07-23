let boxGrid = document.querySelector('#boxgrid');
let color = 'black';

let eraser = document.querySelector('#eraser');
let colorSelection = document.querySelector('#colorSelect');
let randomColorbtn = document.querySelector('#randomcolor');
let rainbowbtn = document.querySelector('#rainbow');
let clearBtn = document.querySelector('#clearbtn');

function createGrid(size){
    for(let i = 0; i < size ; i++ ){
        let rowElement = document.createElement('div');
        rowElement.classList.add('row');
        boxGrid.append(rowElement);
    
        for(let j =0 ; j < size ; j++){
            let columnElement = document.createElement('div');
            columnElement.classList.add('column');
            columnElement.setAttribute('id', 'column');
            rowElement.append(columnElement);
        }
    }
}

function deleteGrid(){
    while(boxGrid.hasChildNodes()){
        boxGrid.removeChild(boxGrid.firstChild);
    }
}

function randomColorGenHSV(){
    goldenratio = 0.618033988749895;
    h = Math.random();
    s = Math.random();
    v = Math.random();
    h += goldenratio;
    h %= 1;
    s += goldenratio;
    s %= 1;
    v += goldenratio;
    v %= 1;

    let rgbconv = hsv_to_rgb(h,s,v);
    return rgbconv;
}

function hsv_to_rgb(h, s, v) {
    let h_i = Math.floor(h * 6);
    let f = h * 6 - h_i;
    let p = v * (1 - s);
    let q = v * (1 - f * s);
    let t = v * (1 - (1 - f) * s);
  
    let r, g, b;
  
    if (h_i === 0) {
      [r, g, b] = [v, t, p];
    } else if (h_i === 1) {
      [r, g, b] = [q, v, p];
    } else if (h_i === 2) {
      [r, g, b] = [p, v, t];
    } else if (h_i === 3) {
      [r, g, b] = [p, q, v];
    } else if (h_i === 4) {
      [r, g, b] = [t, p, v];
    } else if (h_i === 5) {
      [r, g, b] = [v, p, q];
    }
  
     return `rgb(${Math.floor(r * 255)}, ${Math.floor(g * 255)}, ${Math.floor(b * 255)})`;
  }

function eventListenerById(className , event, color ){
    let element = document.querySelectorAll(className);
    for (let i = 0; i < element.length; i++){
        element[i].addEventListener(event, () => {
            element[i].style.backgroundColor = color ;
        });
    }
}

function rainbowgenerator(className , event){
    let element = document.querySelectorAll(className);
    for (let i = 0; i < element.length; i++){
        color = randomColorGenHSV();
        element[i].addEventListener(event, () => {
            element[i].style.backgroundColor = color ;
            color = randomColorGenHSV();
        });
    }
}

function clearscreen(){
    let element = document.querySelectorAll('#column');
    for (let i = 0; i < element.length; i++){
            element[i].style.backgroundColor = 'white' ;
    }
}

eraser.addEventListener('click', () => {
    color = 'white';
    eventListenerById('#column','mouseenter', color);
});

colorSelection.addEventListener('input' , () => {
    color = colorSelection.value;
    eventListenerById('#column', 'mouseenter', color);
});

randomColorbtn.addEventListener('click' , () => {
    color = randomColorGenHSV();
    eventListenerById('#column', 'mouseenter', color);
});

rainbowbtn.addEventListener('click', () => {
    rainbowgenerator('#column','mouseenter');
});

clearBtn.addEventListener('click', () => {
    clearscreen();
})



createGrid(16);
eventListenerById('#column','mouseenter', color);
