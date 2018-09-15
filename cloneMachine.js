function cloneMachine(ogObj)
{
    let clone = JSON.parse(JSON.stringify(ogObj));
    let cloneName="";
    

    for(let key in ogObj)
    {
        if(key === 'name')//changes name of 
        {
            clone[key] = ogObj[key]+"Clone";
            cloneName = clone[key];//sets the clone's name
        }
        if(key === 'offspring')//adds offspring to og
        {
            ogObj[key].push(cloneName);//pushes cloneName to ospring array
        }
    }
    return clone;
}

let dolly = {
    name: 'Dolly',
    species: 'sheep',
    offspring: []
  }
  
  let dollyClone = cloneMachine(dolly);
  
  console.log(dollyClone); // {name: 'DollyClone', species: 'sheep', offspring: []}
  console.log(dolly); // {name: 'Dolly', species: 'sheep', offspring: ['DollyClone']}

  /*
Write a function cloneMachine, that, given an animal (represented as an object), returns a clone of the original animal.

The name of the clone should be the name of its parent, concatenated with the word 'Clone'.

cloneMachine should also push the name of the clone to the parent's offspring array.

cloneMachine
    is a function
    returns an object
    names the clone after its parent, plus the string "Clone"
    gives the clone the same species as its parent
    gives the clone an empty offspring array
    adds the name of the offspring to its parent's offspring property
    adds the name of each offspring to its parent if called multiple times
*/
