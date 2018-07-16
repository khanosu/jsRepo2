//@ts-check
'use strict'

function Rectangle(length, width){
    this.lenght = length;
    this.width = width;
}

Rectangle.prototype.toString = function(){
    return "[Rectangle " + this.lenght + "x" + this.width + "]";
}

Rectangle.prototype.getLength = function(){
    return this.lenght;
}

Rectangle.prototype.setLength = function(length){
    this.lenght = length;
}

//---   ---   ---   ---

function Square(size){
    Rectangle.call(this, size, size);
}

Square.prototype = Object.create(
    Rectangle.prototype, {
        constructor: {
            configurable: true,
            enumerable: true,
            value: Square,
            writable: true

        }

    });

Square.prototype.toString = function(){
    return "[Square " + this.getLength() + "x" + this.getLength() + "]";
}

let square1 = new Square(2.5);
console.log(square1.toString());