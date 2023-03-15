'use strict';

class Shape {
    #name;
    #colour;

    constructor(name, colour) {
        this.#name = name;
        this.#colour =colour;
    }

    set name(name) { this.#name = name; }
    set colour(colour) { this.#colour = colour; }

    get name() { return this.#name; }
    get colour() { return this.#colour; }

    getInfo() {
        return `${this.#colour} ${this.#name}`;
    }
}


const createButton = document.querySelector('.create');
const colorSelect = document.getElementById('colours');
const shapeSelect = document.getElementById('shapes');
const box = document.querySelector('.box');
const output = document.querySelector('.output');

let shapesArray = [];
const maxShapes = 24;

createButton.addEventListener('click', function() { 

    if (shapesArray.length > maxShapes) {
        output.innerHTML = `The box is full!`;
        return;
    }

    const shape = new Shape(shapeSelect.value, colorSelect.value);

    shapesArray.push(shape);

    // Create a new div element to represent the shape object
    const newDiv = document.createElement('div');
    newDiv.classList.add(shape.name);
    newDiv.style.backgroundColor = shape.colour;
    box.appendChild(newDiv);
    
    newDiv.addEventListener('click', function() {
        let index = shapesArray.indexOf(shape) + 1;
        output.innerHTML = `Unit ${index}: ${shape.getInfo()}`
    });
});




