const reverseString = function(word) {
    let arrString= [];
    arrString=word.split("");
    let revArray = [];
    for (let i = arrString.length-1; i>=0; i--){
        revArray+= arrString[i];
       
   }
   return revArray.toString();
    





};

// Do not edit below this line
module.exports = reverseString;
