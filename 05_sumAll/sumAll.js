const sumAll = function(a,b) {
    if(a<0 || b<0){
        return "ERROR";
      }

      if(typeof(a)!=="number" || typeof(b)!=="number"){
        return "ERROR";
      }

      if(a>b){
        let temp = b; 
        b= a;
        a = temp;
      }

      let sum =0;
      for(i=a; i<=b; i++){
        sum = sum+ i;
      }
      return sum;

};

// Do not edit below this line
module.exports = sumAll;
