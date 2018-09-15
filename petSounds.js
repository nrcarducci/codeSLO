let animalNoises = [
    { 'dog': {
      'America' : 'Woof! Woof!',
      'Germany' : 'Wau Wau!',
      'England' : 'Bow wow!',
      'Uruguay' : 'Jua jua!',
      'Afrikaans' : 'Blaf!',
      'Korea' : 'Mong mong!',
      'Iceland' : 'Voff voff!',
      'Albania' : 'Ham!',
      'Algeria' : 'Ouaf ouaf!'
      }
    },
    { 'cat': {
      'America' : 'Meow',
      'Germany' : 'Miauw!',
      'England' : 'mew mew',
      'Uruguay' : 'Miau Miau!',
      'Afrikaans' : 'Purr',
      'Korea' : 'Nyaong!',
      'Iceland' : 'Kurnau!',
      'Albania' : 'Miau',
      'Algeria' : 'Miaou!'
      }
    },
    { 'chicken': {
      'America' : 'Cluck cluck',
      'Germany' : 'tock tock tock',
      'England' : 'Cluck Cluck',
      'Uruguay' : 'gut gut gdak',
      'Afrikaans' : 'kukeleku',
      'Korea' : 'ko-ko-ko',
      'Iceland' : 'Chuck-chuck!',
      'Albania' : 'Kotkot',
      'Algeria' : 'Cotcotcodet'
      }
    }
  ];
  
function petSounds(animal,location)
{
    let soundStr="";
    let outputStr="";

    for(let key1 in animalNoises)
    {
      for(let key2 in animalNoises[key1])
      {
        if(key2===animal)
        {
          for(let key3 in animalNoises[key1][key2])
          {
            if(key3===location)
              soundStr=animalNoises[key1][key2][key3];
          }
        }
      }
    }   
    if(animal==='dog')
      animal='Dogs';
    else if(animal==='cat')
      animal='Cats';
    else if(animal==='chicken')
      animal = 'Chickens';
    
    outputStr= animal + " in "+location+" say "+soundStr; 
    return outputStr;
}

console.log(petSounds('dog', 'Iceland')); // => Dogs in Iceland say Voff voff!

console.log(petSounds('cat', 'Korea')); // => Cats in Korea say Nyaong!


/*  
petSoundsis a function
returns a string
returns the correct dog sound
returns the correct cat sound
returns the correct chicken sound
*/