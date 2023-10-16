var name = prompt("What is your name?");
    
var capitalizeFirstChar = name.slice(0,1);
    
var upperCaseFirstChar = capitalizeFirstChar.toUpperCase();
    
var restOfName = name.slice(1,name.length);
    
 restOfName = restOfName.toLowerCase();
    
var capitalizedName = upperCaseFirstChar + restOfName;
    
alert("Hello " + capitalizedName + " welcome to our Website.");