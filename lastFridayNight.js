let transactions = [
    {
      name: "Tons of glitter",
      amount: 70
    },
    {
      name: "Porcelain Pink Flamingos",
      amount: 92
    },
    {
      name: "Chandelier replacement",
      amount: 10000,
    },
    {
      name: "Dinner at TGIF x6",
      amount: 350
    }
  ];
  

function lastFridayNight(object)
{
    let sumTotal=0;
    for(let i =0;i<object.length;i++)
    {
        sumTotal+=object[i].amount;
    }
    return sumTotal;

}

console.log(lastFridayNight(transactions)); // => 10512

//transactions[i].amount