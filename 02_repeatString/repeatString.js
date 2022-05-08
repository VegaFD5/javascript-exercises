const repeatString = function(words, num) {
    let word = "";
    if(num <0) return "ERROR";
    for(let i = 0; i<num; i++){
        word +=words;
    }
    return word;


};




// Do not edit below this line
module.exports = repeatString;
