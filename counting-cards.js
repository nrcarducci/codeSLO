var count = 0;

function cc(card) {
  // Only change code below this line
  
  switch(card)
  {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count=count+1;

    break;

    case 7:
    case 8:
    case 9: 
    count = count;
    break;

    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
    count = count -1;
    break;    
  }
  console.log(count);
  if(count>0)
    return card + " Bet";
  else
    return card + " Hold";
  // Only change code above this line
}
// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(4); cc(5); cc(6);
