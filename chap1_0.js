//@ts-check
'strict mode'
function getValue( condition) { 
    if (condition) { 
        //var value = "blue"; // other code return value; 
        let value = "blue"; // other code return value; 
    } 
    else { // value exists here with a value of undefined return null; 

    } // value exists here with a value of undefined 

    console.log(`value = ${value}`);
}

getValue(true);
getValue(false);

