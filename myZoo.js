let myZoo = [
    ['King Kong', ['gorilla', 42]],
    ['Nemo', ['fish', 5]],
    ['Punxsutawney Phil', ['groundhog', 11]]
  ];

function zooInventory(myZoo)
{
    let i=0;
    let outputArr=[];
    let newArr=[].concat.apply([], myZoo);
    newArr=[].concat.apply([], newArr);

    while(i<newArr.length)
    {
        outputArr.push(newArr[i] + " the " + newArr[i+1] + " is "+ newArr[i+2]+".");
        i+=3;
       
    }
    //console.log(newArr);
    return outputArr;
}

console.log(zooInventory(myZoo));

/* => ['King Kong the gorilla is 42.',
       'Nemo the fish is 5.'
       'Punxsutawney Phil the groundhog is 11.']
*/