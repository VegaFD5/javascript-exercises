const leapYears = function(year) {
    if(year%4 == 0 && year%100 !=0){
        console.log("true");
    }else{
        console.log(false);
    }

};

// Do not edit below this line
module.exports = leapYears;
