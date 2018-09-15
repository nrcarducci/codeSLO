function clock_angles(hour, minute) 
{
  var minAngle = 360*(minute/60);
  var hourAngle = (360*(hour/12))+((360/12)*(minute/60));

      /*
      var minAngle = 360*(minute/60);
    var hourAngle = (360*(hour/12))+((360/12)*(minute/60));
      (360*(hour/12))
        +
        ((360/12)*(minute/60));

      */
      
      console.log("minute angle = " + minAngle);
      console.log("hour angle = " + hourAngle);
    
      if(minAngle > hourAngle)//if minutes angle is more than hour, subtract so its positive 
          return minAngle - hourAngle;
    
      else // if hour angle is more than minute, subtract so that its positive
          return hourAngle - minAngle;
  }
  
  console.log(clock_angles(6,30));
  console.log(clock_angles(12,0));