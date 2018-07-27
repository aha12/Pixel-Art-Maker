// Select color input
const colorInput = document.querySelector('#colorPicker');

// Select size input
// Select size input

const sizeInput = document.querySelector('#sizePicker');
const widthInput = document.querySelector('#inputWidth');
const heightInput = document.querySelector('#inputHeight');

const canvas = document.querySelector('#pixelCanvas');
                     

// When size is submitted by the user, call makeGrid()

function makeGrid(x) {
    for (widthInput=0; widthInput<x; widthInput++) {
        for (heightInput=0; heightInput<x; heightInput++) {
            canvas.appendChild(sizeInput);
        };
    };


// Your code goes here!

}
