function nextInLine(arr, item) {
    // Your code here
    
    arr.push(item);
    var remove = arr.shift();
    return remove;  // Change this line
  }
  
  // Test Setup
  var testArr = [1,2,3,4,5];
  
  // Display Code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6)); // Modify this line to test
  console.log("After: " + JSON.stringify(testArr));


/*Code Explanation:
Pushe item at the end of arr.
Call the shift() method on arr to get the first item and store it in removed.
Return removed.
Example Run

Test nextInLine(<a href='https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:"' target='_blank' rel='nofollow'>2], 1); runs.
The nextInLine function is called. arr becomes [2]. item becomes 1.
arr.push(item); Pushes 1 to [2]. So arr is now [2,1].
var removed = arr.shift(); removes the first element. So arr is now [1]. 2 has been removed and is stored in removed.
return removed; 2 is returned.
Note: You don�t actually need the variable removed. The element removed can be returned directly using return arr.shift();.

![:clipboard: NOTES FOR CONTRIBUTIONS:
:warning: DO NOT add solutions that are similar to any existing solutions. If you think it is similar but better, then try to merge (or replace) the existing similar solution.
Add an explanation of your solution.
Categorize the solution in one of the following categories � Basic, Intermediate and Advanced.  :traffic_light:
Please add your username only if you have added any relevant main contents. (  :warning: DO NOT remove any existing usernames)
See  :point_right: Wiki Challenge Solution Template for reference.

*/