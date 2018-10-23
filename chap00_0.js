//'use strict'


name2 = 'fooBarBar';
function my(){
    return this.name2;
}


console.log(`
    ${my()}
    `);