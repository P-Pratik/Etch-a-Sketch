let boxGrid = document.querySelector('#boxgrid');
let color = 'black';

let eraser = document.querySelector('#eraser');
let colorSelection = document.querySelector('#colorSelect');

for(let i = 0; i < 16 ; i++ ){
    let rowElement = document.createElement('div');
    rowElement.classList.add('row');
    boxGrid.append(rowElement);

    for(let j =0 ; j < 16 ; j++){
        let columnElement = document.createElement('div');
        columnElement.classList.add('column');
        columnElement.setAttribute('id', 'column');
        rowElement.append(columnElement);
    }
}

function eventListenerById(className , event, color ){
    let element = document.querySelectorAll(className);
    for (let i = 0; i < element.length; i++){
        element[i].addEventListener(event, () => {
            element[i].style.backgroundColor = color ;
        });
    }
}

eraser.addEventListener('click', () => {
    color = 'white';
    eventListenerById('#column','mousemove', color);
});

colorSelection.addEventListener('input' , () => {
    color = colorSelection.value;
    eventListenerById('#column', 'mousemove', color);
});
eventListenerById('#column','mousemove', color);
