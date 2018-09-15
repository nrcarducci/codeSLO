function FirstFactorial(num) 
{ 
    if(num===0)
        return 1;

    if(num===1)
        return 1;
    for(let i=num-1;i>0;i--)
    {
        
        num*=i;
    }
    // code goes here  
    return num; 
         
}
   
// keep this function call here 
console.log(FirstFactorial(4));                            
