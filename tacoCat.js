let tacoCatInc = {
    gourmetShell: {
      'hard treat shell': {cost: 2, quantity: 100},
      'soft treat shell': {cost: 1.5, quantity: 100}
    },
  
    gourmetFishFilling: {
      'salmon': {cost: 5, quantity: 100},
      'tuna': {cost: 5.5, quantity: 100},
      'sardines': {cost: 1.5, quantity: 100}
    },
  
    gourmetVeggie: {
      'cat grass': {cost: 1, quantity: 100}
    },
  
    gourmetSeasoning: {
      'cat nip': {cost: 0.5, quantity: 100},
      'treat dust': {cost: 0.1, quantity: 100}
    },
  
    cash: 0,


    currentInventory: function()
    {
        let quantitySum=0;
        for(let key in tacoCatInc)
        {
            for(let key2 in tacoCatInc[key])
            {
                for(let key3 in tacoCatInc[key][key2])
                {
                    if(key3 === "quantity")
                    {
                        quantitySum+=tacoCatInc[key][key2][key3];
                    }
                }
            }
        }
        return quantitySum; 
    },

    sale: function(input)
    {
        let totalSale=0;
        let orderItem=[];
        for(let key in input)
        {
            orderItem+=input[key];
        }
        
        //console.log(input);
        for(let foodPropKey in tacoCatInc)
        {   
            //console.log(foodPropKey);
            for(let foodValueKey in tacoCatInc[foodPropKey])    
            {
                //console.log(foodValueKey);
                if(orderItem.includes(foodValueKey))
                {
                    for(let costAndQuantityIndex in tacoCatInc[foodPropKey][foodValueKey])
                    {
                        if(costAndQuantityIndex==="cost")
                        {
                            totalSale+=tacoCatInc[foodPropKey][foodValueKey][costAndQuantityIndex];
                            
                        }

                        if(costAndQuantityIndex==="quantity")
                        {
                            tacoCatInc[foodPropKey][foodValueKey][costAndQuantityIndex]=tacoCatInc[foodPropKey][foodValueKey][costAndQuantityIndex]-1;
                                
                        }
                    }
                } 
            }   
            
        }
        this.cash+=totalSale;
        return totalSale;
    },    
  };
  

/******************************************************************************************* */


  console.log(tacoCatInc.currentInventory()); // => 800

  let order = {
    gourmetShell: 'hard treat shell',
    gourmetFishFilling: 'salmon'
  };

  console.log(tacoCatInc.sale(order)); // => 7
  console.log(tacoCatInc.sale(order)); // => 7
  
  console.log(tacoCatInc.gourmetFishFilling.salmon.quantity); // => 98
  console.log(tacoCatInc.cash); // => 14
  
  console.log(tacoCatInc.currentInventory()); // => 796





/*
tacoCatInc
    is an object CHECK

    currentInventory CHECK
        is a method in tacoCatInc CHECK 
        is a function CHECK 
        returns a number CHECK 
        returns the correct value of the inventory CHECK
        does not include cash in the returned value CHECK
    sale
        is a method in tacoCatInc CHECK
        is a function CHECK
        returns a number CHECK
        returns the correct total price for the sale CHECK
        updates the inventory quantities for the correct items
        updates the cash property by the correct amount CHECK
*/