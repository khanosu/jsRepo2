//@ts-check
'use strict'

function myFun(name){

    return {
        setname: function(newName){
            name = newName;
        },

        getname: function(){
            return name;
        }
    };
}

console.log(myFun("Gobucks"));
console.log("---   ---   ---")

var fun1 = myFun("Foo");

console.log(fun1.getname());

console.log("---   ---   ---")
fun1.setname("Bar");
console.log(fun1.getname());
