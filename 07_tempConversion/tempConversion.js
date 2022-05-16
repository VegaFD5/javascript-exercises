const ftoc = function(ftemp) {
  let cel = (ftemp-32)*(5/9);

        

        console.log(cel.toFixed(1));
        return parseFloat(cel.toFixed(1));


};

const ctof = function(ctemp) {
  let fah = (ctemp*(9/5)+32); 
    return parseFloat(fah.toFixed(1));

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
