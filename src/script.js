let boxGrid = document.querySelector('#boxgrid');

for(let i = 0; i < 16 ; i++ ){
    let rowElement = document.createElement('div');
    rowElement.classList.add('row');
    boxGrid.append(rowElement);

    for(let j =0 ; j < 16 ; j++){
        let columnElement = document.createElement('div');
        columnElement.classList.add('column');
        columnElement.setAttribute('id', 'column')
        rowElement.append(columnElement);
    }
}

