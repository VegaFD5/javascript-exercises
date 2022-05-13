const removeFromArray = function(...args) {
    const array1 = args[0];
        const newArray = []
      
        
        array1.forEach(function(item){
          if(!args.includes(item)){
            newArray.push(item);
            
          }
        });
        return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
