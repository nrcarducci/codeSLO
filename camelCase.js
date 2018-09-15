// TYPE CODE BELOW
function justInCamelCase(underName) 
{
    let camelCaseOutput = "";
    let foundUnder = false;
    for(let i = 0; i<underName.length; i++) 
    {
        if (underName[i] === "_") 
        {
            foundUnder = true;
        } 
        
        else 
        {
          
            if(foundUnder) 
            {
                camelCaseOutput += underName[i].toUpperCase();
                foundUnder = false;
            } 
            
            else 
            {
                camelCaseOutput += underName[i];
            }
        }
    }
        return camelCaseOutput;
  }
  
  describe('justInCamelCase', function() {
  
    it('is a function', function() {
      expect(typeof justInCamelCase).toEqual('function');
    });
  
    it('returns a string', function() {
      let returnedValue = justInCamelCase('any string value');
      expect(typeof returnedValue).toEqual('string');
    });
  
    it('returns a camelCased string given a string with one underscore', function() {
      let returnedValue = justInCamelCase('snake_case');
      expect(returnedValue).toEqual('snakeCase');
    });
  
    it('returns a camelCased string given a string with two underscores', function() {
      let returnedValue = justInCamelCase('underscore_the_point');
      expect(returnedValue).toEqual('underscoreThePoint');
    });
  
    it('returns the inputted string unchanged given a lower-case string with no underscores', function() {
      let returnedValue = justInCamelCase('lowercase');
      expect(returnedValue).toEqual('lowercase');
    });
  
  });
  